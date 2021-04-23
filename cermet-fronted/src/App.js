import './App.css';
import Home from './pages/Home';
import Kompetisi from './pages/Kompetisi';
import Beasiswa from './pages/Beasiswa';
import Admin from './pages/Admin';
import AdminDashboard from './pages/AdminDashboard'
import Navbar from './components/NavbarComp'
import { Route, Switch, useLocation } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import { UserContext } from './UserContext';
import { useMemo, useState } from 'react';
import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
      <div className='App'>
            <UserContext.Provider value={value}>
        <Navbar />
        <div className='container app-content' style={{minHeight:"90vh",overflow:"hidden", width:"100vw"}}>
          <AnimatePresence>
            <Switch location={location} key={location.key}>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/beasiswa'>
                  <Beasiswa />
                </Route>
                  <Route exact path="/admin" component={Admin}/>
                <PrivateRoute exact path="/admin/dashboard" component={AdminDashboard}/>
            </Switch>
          </AnimatePresence>
        </div>
            </UserContext.Provider>
      </div>
  );
}

export default App;

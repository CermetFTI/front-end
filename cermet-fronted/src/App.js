import './App.css';
import Home from './pages/Home';
import Kompetisi from './pages/Kompetisi';
import Beasiswa from './pages/Beasiswa';
import Admin from './pages/Admin';
import AdminDashboard from './pages/AdminDashboard'
import Navbar from './components/NavbarComp'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import { UserContext } from './UserContext';
import { useMemo, useState } from 'react';


function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <div className='App'>
            <UserContext.Provider value={value}>
        <Navbar />
        <div className='container app-content'>
          <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/kompetisi'>
                <Kompetisi />
              </Route>
              <Route path='/beasiswa'>
                <Beasiswa />
              </Route>
                <Route exact path="/admin" component={Admin}/>
              <PrivateRoute exact path="/admin/dashboard" component={AdminDashboard}/>
          </Switch>
        </div>
            </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import Home from './pages/Home';
import Kompetisi from './pages/Kompetisi';
import Admin from './pages/Admin';
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
        <Navbar />
        <div className='app-content'>
          <Switch>
            <UserContext.Provider value={value}>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/kompetisi'>
                <Kompetisi />
              </Route>
                <Route exact path="/admin" component={Admin}/>
              <PrivateRoute exact path="/admin/dashboard" component={Admin}/>
            </UserContext.Provider>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

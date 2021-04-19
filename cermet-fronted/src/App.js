import './App.css';
import Home from './pages/Home';
import Kompetisi from './pages/Kompetisi';
import Admin from './pages/Admin';
import Navbar from './components/NavbarComp'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='app-content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/kompetisi'>
              <Kompetisi />
            </Route>
            <Route exact path="/admin" component={Admin}/>
            <PrivateRoute exact path="/admin/dashboard" component={Admin}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

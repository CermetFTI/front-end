import './App.css';
import Home from './pages/Home';
import Kompetisi from './pages/Kompetisi';
import Navbar from './components/NavbarComp'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';



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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

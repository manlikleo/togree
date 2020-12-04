import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Pages/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route exact path={`/home`} render={ (routerProps) => < Home routerProps={routerProps} setUpGame={this.setUpGame} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

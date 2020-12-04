import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Pages/Home';
import {BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <>
      <Route exact path={'/'} render={ (routerProps) => < Home routerProps={routerProps} setUpGame={this.setUpGame} />} />
    </>
  );
}

export default App;

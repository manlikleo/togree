import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Pages/Home';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));


function App() {
  return (
    <>
      <Navbar/>
      <Route exact path={`/`} render={ (routerProps) => < Home routerProps={routerProps} setUpGame={this.setUpGame} />} />
    </>
  );
}

export default App;

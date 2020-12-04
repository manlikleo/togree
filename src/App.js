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
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

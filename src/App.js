import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Pages/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        
          <Route path='/' exact component={Home} />
  
      </Router>
    </>
  );
}

export default App;

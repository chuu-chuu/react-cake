import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Row, Col} from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import CustomNavbar from './components/Navgation';
import Home from './components/home/Index';
import About from './components/About';
import Carousel from './components/Carousel';

// import News from './components/News';
import './App.css';


function App() {
  return (
    
      
      <Router>
        
        <div>
          <CustomNavbar />
          <Carousel />
          
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
        
      </Router>
      
    
  );
}



export default App;

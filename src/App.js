import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Row, Col} from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CustomNavbar from './components/Navgation';
import Home from './components/home/Index';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Receipe from './components/Receipe';
import './App.css';


function App() {
  return (
      <Router>
        <div>
          <CustomNavbar />
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/receipes" component={Receipe} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>

          <Footer />
        </div>
        
      </Router>
      
    
  );
}



export default App;

import './App.css';
import React from 'react';
import logo from './logo.jpg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';
import Reservations from './Reservations';
import Footer from './Footer';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>           
          <nav>
            <div>
              <Link to="/">            
              <img className="logo" src={logo} alt="logo"/></Link>
            </div>
              <Link to="/menu" className="link">Menu</Link>
              <Link to="/about" className="link">About us</Link>              
              <Link to="/contact" className="link">Contact us</Link>            
              <Link to="/reservations" className="link">Reservations</Link>                              
          </nav>
        <Routes>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>          
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/reservations" element={<Reservations/>}/>          
        </Routes>
        </Router>
      </div>
    <Footer/>    
    </div>
  );
}

export default App;



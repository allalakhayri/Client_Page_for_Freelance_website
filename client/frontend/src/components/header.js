import  "../App.css"
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = ()=>{
    return (
     
        <Nav className="navbar">
    <div className="max-width">
      <div className="logo"><a href="#">Tuni<span>Job.</span></a></div>
      <ul className="menu">
        <li><a href="#home" className="menu-btn">Home</a></li>
        <li><a href="#about" className="menu-btn">About</a></li>                                    
        <li><a href="#services" className="menu-btn">Services</a></li>
        
        <li><a href="#teams" className="menu-btn">Candidates</a></li>
        <li><a href="#contact" className="menu-btn">Contact</a></li>
        
        <li><a  className="menu-btn">
        
        <NavDropdown
              id="nav-dropdown-dark-example"
              title="Sign In"
              menuVariant="dark"
              className="sign-in"
              
            >
              <div className="sign-in-drp">
              <NavDropdown.Item  href="/signinTalent">Get job</NavDropdown.Item>
          
              <NavDropdown.Item  href="/signinWork">Provide job</NavDropdown.Item>
              
              </div>
            </NavDropdown> 
           
          </a></li>
      </ul>
      <div className="menu-btn">
        <i className="fas fa-bars" />
      </div>
    </div>
  </Nav>
      
    )
}
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";


const NavBar = () => {
  return (
    <div className='navbar-wrapper'>
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand href="#">Avadhesh</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default NavBar;
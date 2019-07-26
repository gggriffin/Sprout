import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navBar">
      <Navbar expand="lg" variant="light" bg="light">
        <div className="hvr-icon-fade">
          <Navbar.Brand href="/api/v1/auth/google" className="hvr-icon hvr-skew-forward">Sign Up/Login</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false" className="green-hover" />
        <Navbar.Collapse className="justify-content-end" id="navLinks">
          <Nav>
            <Nav.Link className="hvr-grow hvr-icon-fade" href="/trending" id="navCont">
              Trending
              <i className="fas fa-fire hvr-icon" aria-hidden="true" id="navIcon"></i>
            </Nav.Link>
            <Nav.Link className="hvr-grow hvr-icon-fade" href="/collaborate" id="navCont">
              Collaborate
              <i className="fas fa-book-open hvr-icon" aria-hidden="true" id="navIcon"></i>
            </Nav.Link>
            <Nav.Link href="/projects" className="hvr-grow hvr-icon-fade" id="navCont">
              Projects
              <i className="fas fa-project-diagram hvr-icon" aria-hidden="true" id="navIcon"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
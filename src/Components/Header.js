import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '../imgs/bl_logo_comb.png';

const styles = {
  logo: {
      width: "40px",
      marginRight: "10px",
  }
}
function Header(props) {
  return (
    <div className="header">
      <div className="navigation">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/"><img style={styles.logo} src={logo} alt="Brendan Lenzner logo" /> Brendan Lenzner</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Header;
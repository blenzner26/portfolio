import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '../imgs/bl_logo_comb.png';

const styles = {
  logo: {
    width: "40px",
    marginRight: "10px",
  }
};

function Header() {

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="header">
      <Navbar collapseOnSelect expanded={expanded} expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/"><img style={styles.logo} src={logo} alt="Brendan Lenzner logo" /> Brendan Lenzner</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/skills" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Skills</Nav.Link>
            <Nav.Link as={Link} to="/experience" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Experience</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact"onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}

export default Header;
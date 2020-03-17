import React from "react"
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

function Header(props) {
  return (
    <div className="header">
       <div className="navigation">
          <Link to="/" className="site-title"><h1>Brendan Lenzner</h1></Link>
          <div className="navigation-sub">
                                          
            <Link to="/" className="nav-item">About</Link>
            <Link to="/portfolio" className="nav-item">Portfolio</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
          </div>
        </div>
    </div>
  )
}
 
export default Header;
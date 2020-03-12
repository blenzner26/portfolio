import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Portfolio from './Portfolio.js'; 
import About from './About.js'; 
import Contact from './Contact.js'; 
import GlobalStudies from './Projects/GlobalStudies.js';
import Artworks from './Projects/Artworks.js';
import History from './Projects/History.js';
import Math from './Projects/Math.js';
import BPT from './Projects/BPT.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
  
        <div className="navigation">
          <Link to="/" className="site-title"><h1>Brendan Lenzner</h1></Link>
          <div className="navigation-sub">
                                          
            <Link to="/" className="nav-item">About</Link>
            <Link to="/portfolio" className="nav-item">Portfolio</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
  
          </div>
        </div>
        
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/uwm-global-studies" component={GlobalStudies} />
        <Route path="/uwm-history" component={History} />
        <Route path="/uwm-math" component={Math} />
        <Route path="/artworks-mke" component={Artworks} />
        <Route path="/bpt" component={BPT} />
      </div>
    </BrowserRouter>
  );
}
 
export default App;
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Portfolio from './Portfolio.js'; 
import About from './About.js'; 
import Contact from './Contact.js'; 
import GlobalStudies from './Projects/GlobalStudies.js';
import Artworks from './Projects/Artworks.js';
import History from './Projects/History.js';
import Math from './Projects/Math.js';
import BPT from './Projects/BPT.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <div className="main">
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/uwm-global-studies" component={GlobalStudies} />
        <Route path="/uwm-history" component={History} />
        <Route path="/uwm-math" component={Math} />
        <Route path="/artworks-mke" component={Artworks} />
        <Route path="/bpt" component={BPT} />
      </div>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;
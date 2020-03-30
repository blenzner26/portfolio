import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Portfolio from './Pages/Portfolio.js'; 
import About from './Pages/About.js'; 
import Contact from './Pages/Contact.js'; 
import GlobalStudies from './Projects/GlobalStudies.js';
import Artworks from './Projects/Artworks.js';
import History from './Projects/History.js';
import Math from './Projects/Math.js';
import BPT from './Projects/BPT.js';
import NotFound from './Pages/NotFound.js';

class BrowserRouterLinks extends Component {
  render() {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/uwm-global-studies" component={GlobalStudies} />
                <Route path="/uwm-history" component={History} />
                <Route path="/uwm-math" component={Math} />
                <Route path="/artworks-mke" component={Artworks} />
                <Route path="/bpt" component={BPT} />
                <Route component={NotFound} />
            </Switch>
      </div>
    );
  }
}
export default BrowserRouterLinks;
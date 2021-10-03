import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Portfolio from './Pages/Portfolio.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import UWM from './Projects/UWM.js';
import Artworks from './Projects/Artworks.js';
import Paradigm from './Projects/Paradigm.js';
import TMI from './Projects/TMI.js';
import Calculator from './Projects/Calculator.js';
import CalculatoriOS from './Projects/CalculatoriOS.js';
import NotFound from './Pages/NotFound.js';
import Skills from './Pages/Skills.js';
import Devour from './Projects/Devour.js';
import Experience from './Pages/Experience.js';

class BrowserRouterLinks extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/uwm" component={UWM} />
          <Route path="/artworks-mke" component={Artworks} />
          <Route path="/paradigm" component={Paradigm} />
          <Route path="/tmi" component={TMI} />
          <Route path="/ios-calc" component={CalculatoriOS} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/devour" component={Devour} />
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
export default BrowserRouterLinks;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import BrowserRouterLinks from './BrowserRouterLinks.js';
import Particles from 'react-particles-js';

import './App.css';

function App() {
    return ( 
        <BrowserRouter >
        <Header />
        <div className = "main-content">

        <Particles className = "particle-canvas"
        params = {
            {
                "particles": {
                    "number": {
                        "value": 60
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }
        }
        /> 
        <BrowserRouterLinks />
        </div> 
        <Footer />
        </BrowserRouter>
    );
}
export default App;
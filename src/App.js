import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import BrowserRouterLinks from './BrowserRouterLinks.js';

import './App.css';

function App() {
    return (
        <BrowserRouter >
            <Header />
            <div className="main-content">
                <BrowserRouterLinks />
            </div>
            <Footer />
        </BrowserRouter>
    );
}
export default App;
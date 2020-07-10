import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import BrowserRouterLinks from './BrowserRouterLinks.js';

import './App.css';

/* var state = {
    darkMode: false,
}

function handleChange(){
    if (state.darkMode === false) {
        state.darkMode = true;
    }
    else if(state.darkMode === true) {
        state.darkMode = false;
    }
}

function getModeClassNames(){
    let cssClass = "lightTheme";
    if (state.darkMode === false) {
        cssClass = "lightTheme";
    }
    else if(state.darkMode === true) {
        cssClass = "darkTheme";
    }
    return cssClass;
} */

function App() {
    return (
        <BrowserRouter >
            <Header />
            {/* <Switch className={getModeClassNames() + "_Switch"} color="primary" onChange={() => handleChange()} inputProps={{ 'aria-label': 'primary checkbox' }} /> */}
            <div className={"main-content"/* + getModeClassNames() */} >
                <BrowserRouterLinks />
            </div>
            <Footer />
        </BrowserRouter>
    );
}
export default App;
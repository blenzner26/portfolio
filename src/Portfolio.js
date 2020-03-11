import React from 'react';
import Thumbnail from './Thumbnail.js';
import './App.css';
import placeholder from './placeholder.png';
 
function Portfolio(props) {
  return (
    // Render a Thumbnail component
<div>
    <h2>Portfolio</h2>
    <div className="portfolio">
      
        <Thumbnail
            link="/uwm-global-studies"
            image= {placeholder}
            title="UW-Milwaukee Global Studies"
            category="WordPress Website"
        />
        
        <Thumbnail
            link="/uwm-history"
            image= {placeholder}
            title="UW-Milwaukee History Department"
            category="WordPress Website"
        />
        
        <Thumbnail
            link="/uwm-math"
            image= {placeholder}
            title="UW-Milwaukee Mathematical Sciences"
            category="WordPress Website"
        />
        <Thumbnail
            link="/artworks-mke"
            image= {placeholder}
            title="Artworks for Milwaukee"
            category="WordPress Website"
        />
        <Thumbnail
            link="/bpt"
            image= {placeholder}
            title="UWM Behavioral Play Therapy"
            category="WordPress Theme &amp; Website"
        />
    </div>
    </div>
  )
}
 
export default Portfolio;
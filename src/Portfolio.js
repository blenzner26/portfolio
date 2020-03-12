import React from 'react';
import Thumbnail from './Thumbnail.js';
import './App.css';
import placeholder from './placeholder.png';
 
function Portfolio(props) {
  return (
<div>
    <h2 className="page-title">Portfolio</h2>
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
        
        <Thumbnail
            link="/uwm-math"
            image= {placeholder}
            title="UW-Milwaukee Mathematical Sciences"
            category="WordPress Website"
        />
        <Thumbnail
            link="/uwm-celtic-studies"
            image= {placeholder}
            title="UW-Milwaukee Celtic Studies"
            category="WordPress Website"
        />
        <Thumbnail
            link="/calculator"
            image= {placeholder}
            title="Calculator App"
            category="React App"
        />
    </div>
    </div>
  )
}
 
export default Portfolio;
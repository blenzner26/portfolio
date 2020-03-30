import React from 'react';
import Thumbnail from '../Components/Thumbnail.js';
import placeholder from '../placeholder.png';
 
function Portfolio(props) {
  return (
<div>
    <h2 className="page-title">Portfolio</h2>
    <div className="portfolio">
      
        <Thumbnail
            link="/uwm-global-studies"
            image= {placeholder}
            alternate="UWM Global Studies"
            title="UW-Milwaukee Global Studies"
            category="WordPress Website"
        />
        
        <Thumbnail
            link="/uwm-history"
            image= {placeholder}
            alternate="UWM History"
            title="UW-Milwaukee History Department"
            category="WordPress Website"
        />
        <Thumbnail
            link="/artworks-mke"
            image= {placeholder}
            alternate="Artworks for Milwaukee"
            title="Artworks for Milwaukee"
            category="WordPress Website"
        />
        <Thumbnail
            link="/bpt"
            image= {placeholder}
            alternate="UWM Behavioral Play Therapy"
            title="UWM Behavioral Play Therapy"
            category="WordPress Theme &amp; Website"
        />
        
        <Thumbnail
            link="/uwm-math"
            image= {placeholder}
            alternate="UWM Mathematical Sciences"
            title="UW-Milwaukee Mathematical Sciences"
            category="WordPress Website"
        />
        <Thumbnail
            link="/uwm-celtic-studies"
            image= {placeholder}
            alternate="UWM Celctic Studies"
            title="UW-Milwaukee Celtic Studies"
            category="WordPress Website"
        />
        <Thumbnail
            link="/calculator"
            image= {placeholder}
            alternate="Calculator App"
            title="Calculator App"
            category="React App"
        />
    </div>
    </div>
  )
}
 
export default Portfolio;
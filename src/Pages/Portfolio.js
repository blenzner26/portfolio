import React from 'react';
import Thumbnail from '../Components/Thumbnail.js';
import uwm from '../imgs/uwm.jpg';
import artworks from '../imgs/artworks.jpg';
import bpt from '../imgs/bpt.jpg';
import undraw_wireframe from '../imgs/undraw_wireframe.svg';
 
function Portfolio(props) {
  return (
<div className="portfolio-content">
    <h2 className="page-title">Portfolio</h2>
    <div className="portfolio">
        <Thumbnail
            link="/uwm"
            image= {uwm}
            alternate="University of Wisconsin-Milwaukee"
            title="UWM College of Letters and Science"
            category="Front-End Web Developer"
        />
       
        <Thumbnail
            link="/artworks-mke"
            image= {artworks}
            alternate="Artworks for Milwaukee"
            title="Artworks for Milwaukee"
            category="WordPress Website"
        />
        <Thumbnail
            link="/bpt"
            image= {bpt}
            alternate="UWM Behavioral Play Therapy"
            title="UWM Behavioral Play Therapy"
            category="WordPress Theme &amp; Website"
        />

       {/*  <Thumbnail
            link="/calculator"
            image= {placeholder}
            alternate="Calculator App"
            title="Calculator App"
            category="React App"
        /> */}
    </div>
    <img src={undraw_wireframe} className="port-img" alt="portfolio graphic"/>
    </div>
  )
}
 
export default Portfolio;
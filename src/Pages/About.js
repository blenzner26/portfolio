import React from "react";
import Typical from 'react-typical';
import BlueButtonLarge from "../Components/BlueButtonLarge";
import undraw_responsive from '../imgs/undraw_responsive.svg';

function About(props) {
  return (
    <div className="about-container">
      <div className="about">
        <h2 className="about-title"><Typical steps={["Hello!", 2500, "I'm Brendan.", 2500, "I'm a web developer.", 3500]}  loop = {Infinity} /></h2>
        <p className="about-text">Front End Developer | WordPress</p>
        <BlueButtonLarge toLink={"/portfolio"} buttonText="View Portfolio"/>
      </div>
      <div className="about-img"><img src={undraw_responsive} alt="coding graphic"/></div>
    </div>
  )
}
 
export default About;
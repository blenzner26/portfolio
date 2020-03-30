import React from "react";
import Typical from 'react-typical';
import BlueButtonLarge from "../Components/BlueButtonLarge";

function About(props) {
  return (
    <div className="about-container">
      
      <h2 className="about-title"><Typical steps={["Hello!", 2500, "I'm Brendan.", 2500, "I'm a web developer.", 3500]}  loop = {Infinity} /></h2>
      <p className="about-text">Front End Developer | WordPress</p>
      <BlueButtonLarge toLink={"/portfolio"} buttonText="View Portfolio"/>
    </div>
  )
}
 
export default About;
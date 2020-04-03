import React from "react";
import Card from '../Components/Card.js';
import BlueButtonLarge from "../Components/BlueButtonLarge.js";

function UWM(props) {
  return (
    <div>
      <h2 className="page-title">University of Wisconsin-Milwaukee</h2>
      <h3 className="pos-title">College of Letters and Science | Student Front-End Web Developer</h3>
      <p>As a student developer, I had the chance to design and create new webites for departments and programs within the college:</p>
      <div className="site-cards">
        <Card title="Center for Celtic Studies" link="https://uwm.edu/celtic-studies" classAdd="bl-card-blue" />
        <Card title="Global Studies" link="https://uwm.edu/global-studies" classAdd="bl-card-blue" />
        <Card title="International Studies" link="https://uwm.edu/international-studies"  classAdd="bl-card-blue"/>
        <Card title="Classics Program" link="https://uwm.edu/classics"  classAdd="bl-card-blue"/>
      </div>
      <p>Websites Redesigns:</p>
      <div className="site-cards">
        <Card title="Mathematical Sciences" link="https://uwm.edu/math" classAdd="bl-card-green" />
        <Card title="History" link="https://uwm.edu/history" classAdd="bl-card-green" />
        <Card title="Sociology" link="https://uwm.edu/sociology"  classAdd="bl-card-green"/>
        <Card title="Chemistry &amp; Biochemistry" link="https://uwm.edu/chemistry"  classAdd="bl-card-green"/>
        <Card title="Biological Sciences" link="https://uwm.edu/biology"  classAdd="bl-card-green"/>
      </div>
      <BlueButtonLarge toLink="/portfolio" buttonText="Back to Portfolio" />
    </div>
  )
}
 
export default UWM;
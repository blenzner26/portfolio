import React from "react";
import { Helmet } from "react-helmet";
import Typical from 'react-typical';
import Fade from '@material-ui/core/Fade';
import BlueButtonLarge from "../Components/BlueButtonLarge";
import undraw_web_developer from '../imgs/undraw_web_developer.svg';

function About(props) {
  return (
    <div>
      <Helmet>
        <title>Brendan Lenzner | Front End Web Developer &amp; Designer</title>
        <meta name="description" content="Front-End Web Developer, WordPress, React Developer" />
      </Helmet>

      <Fade in={true}>
        <div className="about-container">
          <div className="about">
            <h2 className="about-title"><Typical steps={["Hello!", 2500, "I'm Brendan.", 2500, "I'm a web developer", 3000, "and designer.", 3500]} loop={Infinity} /></h2>
            <p className="about-text">Front End Developer | WordPress Developer | Web Design</p>
            <BlueButtonLarge toLink={"/portfolio"} buttonText="View Portfolio" arrow="right" />
          </div>
          <div className="about-img"><img src={undraw_web_developer} alt="developer graphic" /></div>
        </div>
      </Fade>
    </div>
  )
}

export default About;
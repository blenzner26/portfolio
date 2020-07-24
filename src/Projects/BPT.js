import React from "react";
import { Helmet } from "react-helmet";
import BlueButtonLarge from "../Components/BlueButtonLarge.js";
import Chip from '@material-ui/core/Chip';
import Fade from '@material-ui/core/Fade';
import ImageRound from "../Components/ImageRound.js";
import undraw_site_content from '../imgs/undraw_site_content.svg';
import uwm_square from '../imgs/uwm_square.jpg';
import bpt_screenshot from '../imgs/bpt_screenshot.png';
import GitHubBTN from "../Components/GitHubBTN.js";


const styles = {
  hr: {
    borderColor: '#1F50FF',
    width: '15%',
    height: '1px',
    background: '#1F50FF',
    marginTop: '30px',
  },
  margTop: {
    marginTop: '20px',
  },
  chip: {
    border: '2px solid rgb(31, 80, 255)',
    color: '#ffffff',
    padding: '10px',
    margin: '10px',
  },
};

function BPT(props) {
  return (
    <div>
      <Helmet>
        <title>UWM Behavioral Play Therapy - Portfolio | Brendan Lenzner</title>
      </Helmet>

      <Fade in={true}>
        <div>
          <h2 className="page-title">UWM Behavioral Play Therapy</h2>
          <h3 className="pos-title">WordPress Theme &amp; Website</h3>
          <ImageRound source={uwm_square} alt="UWM logo" width="195px" height="195px" />
          <hr style={styles.hr} />
          <Chip style={styles.chip} label="WordPress" variant="outlined" /> <Chip style={styles.chip} label="HTML" variant="outlined" /> <Chip style={styles.chip} label="CSS" variant="outlined" /> <Chip style={styles.chip} label="PHP" variant="outlined" /> <Chip style={styles.chip} label="JavaScript" variant="outlined" /> <Chip style={styles.chip} label="Bootstrap" variant="outlined" /><br />
          <br />
          <GitHubBTN href="https://github.com/blenzner26/behavioral-play-therapy-uwm" buttonText="View theme code on GitHub" arrow="right" />
          <br /><br />
          <img src={bpt_screenshot} width="750px" alt="Behavioral Play Therapy website screenshot" /><br />
          <BlueButtonLarge toLink="/portfolio" buttonText="Back to Portfolio" arrow="left" />
          <hr style={styles.hr} />
          <img src={undraw_site_content} className="port-img" alt="portfolio graphic" />
        </div>
      </Fade>
    </div>
  )
}


export default BPT;
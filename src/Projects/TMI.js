import React from "react";
import { Helmet } from "react-helmet";
import BlueButtonLarge from "../Components/BlueButtonLarge.js";
import BlueButtonLargeN from "../Components/BlueButtonLargeN.js";
import Chip from '@material-ui/core/Chip';
import Fade from '@material-ui/core/Fade';
import ImageRound from "../Components/ImageRound.js";
import undraw_site_content from '../imgs/undraw_site_content.svg';
import tmi_square from '../imgs/tmi_square.jpg';
import tmi_screenshot from '../imgs/tmi_screenshot.jpg';

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
    border: '2px solid #1F50FF',
    color: '#ffffff',
    padding: '10px',
    margin: '10px',
  },
};

function TMI(props) {
  return (
    <div>
      <Helmet>
        <title>Trotter Manufacturing - Portfolio | Brendan Lenzner</title>
      </Helmet>

      <Fade in={true}>
        <div>
          <h2 className="page-title">Trotter Manufacturing</h2>
          <h3 className="pos-title">WordPress Website Redesign</h3>
          <ImageRound source={tmi_square} alt="Trotter Manufacturing logo" width="195px" height="195px" />
          <hr style={styles.hr} />
          <Chip style={styles.chip} label="WordPress" variant="outlined" /> <Chip style={styles.chip} label="HTML" variant="outlined" /> <Chip style={styles.chip} label="CSS" variant="outlined" /> <Chip style={styles.chip} label="PHP" variant="outlined" /> <Chip style={styles.chip} label="Adobe Photoshop" variant="outlined" /><br />
          <BlueButtonLargeN href="http://www.trottermfg.com/" buttonText="Visit Website" arrow="right" />
          <br />
          <img src={tmi_screenshot} width="750px" alt="Totter Manufacuring website screenshot" /><br />
          <BlueButtonLarge toLink="/portfolio" buttonText="Back to Portfolio" arrow="left" />
          <hr style={styles.hr} />
          <img src={undraw_site_content} className="port-img" alt="portfolio graphic" />
        </div>
      </Fade>
    </div>
  )
}

export default TMI;
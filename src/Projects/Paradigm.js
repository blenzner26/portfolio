import React from "react";
import { Helmet } from "react-helmet";
import BlueButtonLarge from "../Components/BlueButtonLarge.js";
import BlueButtonLargeN from "../Components/BlueButtonLargeN.js";
import Chip from '@material-ui/core/Chip';
import Fade from '@material-ui/core/Fade';
import ImageRound from "../Components/ImageRound.js";
import undraw_site_content from '../imgs/undraw_site_content.svg';
import paradigm_square from '../imgs/paradigm_square.jpg';
import paradigm_screenshot from '../imgs/paradigm-screenshot.jpg';

const styles = {
  hr: {
    borderColor: 'rgb(31, 80, 255)',
    width: '15%',
    height: '1px',
    background: 'rgb(31, 80, 255)',
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
    backgroundColor: 'rgb(31, 80, 255)',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
};

function Paradigm(props) {
  return (
    <div>
      <Helmet>
        <title>Paradigm Tech Consulting - Portfolio | Brendan Lenzner</title>
      </Helmet>

      <Fade in={true}>
        <div>
          <h2 className="page-title">Paradigm Tech Consulting</h2>
          <h3 className="pos-title">WordPress Website</h3>
          <ImageRound source={paradigm_square} alt="Paradigm Tech Consulting logo" width="195px" height="195px" />
          <hr style={styles.hr} />
          <Chip style={styles.chip} label="WordPress" variant="outlined" /> <Chip style={styles.chip} label="HTML" variant="outlined" /> <Chip style={styles.chip} label="CSS" variant="outlined" /> <Chip style={styles.chip} label="WordPress" variant="outlined" /> <br />
          <BlueButtonLargeN href="https://www.paradigmtechconsulting.com/" buttonText="Visit Website" arrow="right" />
          <br />
          <img src={paradigm_screenshot} width="750px" alt="Paradigm Tech Consulting website screenshot" /><br />
          <BlueButtonLarge toLink="/portfolio" buttonText="Back to Portfolio" arrow="left" />
          <hr style={styles.hr} />
          <img src={undraw_site_content} className="port-img" alt="portfolio graphic" />
        </div>
      </Fade>
    </div>
  )
}


export default Paradigm;
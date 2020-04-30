import React from "react";
import { Helmet } from "react-helmet";
import BlueButtonLarge from "../Components/BlueButtonLarge.js";
import BlueButtonLargeN from "../Components/BlueButtonLargeN.js";
import Chip from '@material-ui/core/Chip';
import Fade from '@material-ui/core/Fade';
import ImageRound from "../Components/ImageRound.js";
import undraw_site_content from '../imgs/undraw_site_content.svg';
import calculator_square from '../imgs/calculator_square.jpg';
import calculator_screenshot from '../imgs/calculator_screenshot.png';


const styles = {
  hr: {
    borderColor: '#1165eb',
    width: '15%',
    height: '1px',
    background: '#1165eb',
    marginTop: '30px',
  },
  margTop: {
    marginTop: '20px',
  },
  chip: {
    border: '2px solid rgb(17, 101, 175)',
    color: '#ffffff',
    padding: '10px',
    margin: '10px',
  }
};

function Artworks(props) {
  return (
    <div>
      <Helmet>
        <title>Calculator App - Portfolio | Brendan Lenzner</title>
      </Helmet>

      <Fade in={true}>
        <div>
          <h2 className="page-title">Calculator App</h2>
          <h3 className="pos-title">React.js App</h3>
          <ImageRound source={calculator_square} alt="Calculator Icon" width="195px" height="195px" />
          <hr style={styles.hr} />
          <Chip style={styles.chip} label="React.js" variant="outlined" /> <Chip style={styles.chip} label="JavaScript" variant="outlined" /> <Chip style={styles.chip} label="HTML" variant="outlined" /> <Chip style={styles.chip} label="CSS" variant="outlined" /> <br />
          <BlueButtonLargeN href="https://calculator.brendanlenzner.com" buttonText="Visit Calculator" arrow="right" />
          <br />
          <img src={calculator_screenshot} width="750px" alt="Calculator app screenshot" /><br />
          <BlueButtonLarge toLink="/portfolio" buttonText="Back to Portfolio" arrow="left" />
          <hr style={styles.hr} />
          <img src={undraw_site_content} className="port-img" alt="portfolio graphic" />
        </div>
      </Fade>
    </div>
  )
}

export default Artworks;
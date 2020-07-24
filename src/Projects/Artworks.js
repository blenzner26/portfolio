import React from "react";
import { Helmet } from "react-helmet";
import BlueButtonLarge from "../Components/BlueButtonLarge.js";
import Chip from '@material-ui/core/Chip';
import Fade from '@material-ui/core/Fade';
import ImageRound from "../Components/ImageRound.js";
import undraw_site_content from '../imgs/undraw_site_content.svg';
import artworks_square from '../imgs/artworks_square.jpg';
import artworks_screenshot from '../imgs/artworks_screenshot.jpg';


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

function Artworks(props) {
  return (
    <div>
      <Helmet>
        <title>ArtWorks for Milwaukee - Portfolio | Brendan Lenzner</title>
      </Helmet>

      <Fade in={true}>
        <div>
          <h2 className="page-title">ArtWorks for Milwaukee | nonProf-IT</h2>
          <h3 className="pos-title">WordPress Website Redesign</h3>
          <ImageRound source={artworks_square} alt="ArtWorks for Milwaukee logo" width="195px" height="195px" />
          <hr style={styles.hr} />
          <Chip style={styles.chip} label="WordPress" variant="outlined" /> <Chip style={styles.chip} label="HTML" variant="outlined" /> <Chip style={styles.chip} label="CSS" variant="outlined" /> <Chip style={styles.chip} label="PHP" variant="outlined" /> <Chip style={styles.chip} label="Adobe Photoshop" variant="outlined" /><br />
          <br />
          <p>This website was designed as a part of an internship that assisted local nonprofit organizations throughout Milwaukee with IT and web needs. My team was responsible for redesigning an outdated website into a new, modern looking site.</p><br />
          <img src={artworks_screenshot} width="750px" alt="ArtWorks for Milwaukee website screenshot" /><br />
          <BlueButtonLarge toLink="/portfolio" buttonText="Back to Portfolio" arrow="left" />
          <hr style={styles.hr} />
          <img src={undraw_site_content} className="port-img" alt="portfolio graphic" />
        </div>
      </Fade>
    </div>
  )
}

export default Artworks;
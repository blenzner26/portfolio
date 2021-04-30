import React from "react";
import { Helmet } from "react-helmet";
import BlueButtonLarge from "../Components/BlueButtonLarge.js";
import BlueButtonLargeN from "../Components/BlueButtonLargeN.js";
import Chip from '@material-ui/core/Chip';
import Fade from '@material-ui/core/Fade';
import ImageRound from "../Components/ImageRound.js";
import undraw_site_content from '../imgs/undraw_site_content.svg';
import devour_square from '../imgs/devour-square.png';
import devour_screenshot from '../imgs/devour-screenshot.jpg';

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

function Devour(props) {
  return (
    <div>
      <Helmet>
        <title>Devour Custom Baits | Brendan Lenzner</title>
      </Helmet>

      <Fade in={true}>
        <div>
          <h2 className="page-title">Devour Custom Baits</h2>
          <h3 className="pos-title">WordPress &amp; WooCommerce Website</h3>
          <ImageRound source={devour_square} alt="ArtWorks for Milwaukee logo" width="195px" height="195px" />
          <hr style={styles.hr} />
          <Chip style={styles.chip} label="WordPress" variant="outlined" /> <Chip style={styles.chip} label="WooCommerce" variant="outlined" /> <Chip style={styles.chip} label="Stripe Payments" variant="outlined" /> <Chip style={styles.chip} label="HTML" variant="outlined" /> <Chip style={styles.chip} label="CSS" variant="outlined" /> <Chip style={styles.chip} label="PHP" variant="outlined" /> <Chip style={styles.chip} label="Adobe Photoshop" variant="outlined" /><br />
          <p>A website built for a local small business that required an online store presence.</p><BlueButtonLargeN href="https://www.devourcustombaits.com/" buttonText="Visit Website" arrow="right" /><br />
          <img src={devour_screenshot} width="750px" alt="Devour Custom Baits website" /><br />
          <BlueButtonLarge toLink="/portfolio" buttonText="Back to Portfolio" arrow="left" />
          <hr style={styles.hr} />
          <img src={undraw_site_content} className="port-img" alt="portfolio graphic" />
        </div>
      </Fade>
    </div>
  )
}

export default Devour;
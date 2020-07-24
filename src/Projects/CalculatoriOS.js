import React from "react";
import { Helmet } from "react-helmet";
import BlueButtonLarge from "../Components/BlueButtonLarge.js";
import Chip from '@material-ui/core/Chip';
import Fade from '@material-ui/core/Fade';
import ImageRound from "../Components/ImageRound.js";
import undraw_site_content from '../imgs/undraw_site_content.svg';
import calculator_square from '../imgs/calculator_square.jpg';
import calculator_screenshot from '../imgs/ios_calc_screenshot.jpg';
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

function Artworks(props) {
    return (
        <div>
            <Helmet>
                <title>iOS Calculator App - Portfolio | Brendan Lenzner</title>
            </Helmet>

            <Fade in={true}>
                <div>
                    <h2 className="page-title">iOS Calculator App</h2>
                    <h3 className="pos-title">iOS Calculator App built using Swift</h3>
                    <ImageRound source={calculator_square} alt="Calculator Icon" width="195px" height="195px" />
                    <hr style={styles.hr} />
                    <Chip style={styles.chip} label="Swift" variant="outlined" /> <Chip style={styles.chip} label="Swift UI" variant="outlined" /> <Chip style={styles.chip} label="Xcode" variant="outlined" /><br /><br />
                    <GitHubBTN href="https://github.com/blenzner26/iOS_Calculator" buttonText="View code on GitHub" arrow="right" />
                    <br /><br />
                    <img src={calculator_screenshot} width="425" alt="iOS calculator app screenshot" /><br />
                    <BlueButtonLarge toLink="/portfolio" buttonText="Back to Portfolio" arrow="left" />
                    <hr style={styles.hr} />
                    <img src={undraw_site_content} className="port-img" alt="portfolio graphic" />
                </div>
            </Fade>
        </div>
    )
}

export default Artworks;
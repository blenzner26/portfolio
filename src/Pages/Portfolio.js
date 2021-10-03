import React from 'react';
import { Helmet } from "react-helmet";
import PortfolioCard from '../Components/PortfolioCard.js';
import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';
import uwm from '../imgs/uwm.jpg';
import bpt from '../imgs/bpt.jpg';
import undraw_wireframe from '../imgs/undraw_wireframe.svg';
import tmi from '../imgs/tmi_screenshot.jpg';
import calculator from '../imgs/calculator.jpg';
import iosCalc from '../imgs/ios_calc_port.png';
import devour from '../imgs/devour.jpg';

const styles = {
    hr: {
        borderColor: '#1F50FF',
        width: '15%',
        height: '1px',
        background: '#1F50FF',
        marginTop: '30px',
    },
};

function Portfolio(props) {
    return (
        <React.Fragment>
            <Helmet>
                <title>Portfolio | Brendan Lenzner</title>
            </Helmet>
            <Fade in={true}>
                <div className="portfolio-content">
                    <h2 className="page-title">Portfolio</h2>
                    <p>Check out some of my recent work:</p>
                    <div className="portfolio">
                        <Zoom in={true}>
                            <div>
                                <PortfolioCard
                                    image={devour}
                                    image_title="Devour Custom Baits website"
                                    card_title="Devour Custom Baits"
                                    card_description="WordPress &amp; WooCommerce Website"
                                    link="/devour"
                                />
                            </div>
                        </Zoom>
                        <Zoom in={true}>
                            <div>
                                <PortfolioCard
                                    image={bpt}
                                    image_title="Paradigm Tech Consulting"
                                    card_title="Paradigm Tech Consulting"
                                    card_description="WordPress Website"
                                    link="/paradigm"
                                />
                            </div>
                        </Zoom>
                        <Zoom in={true} style={{ transitionDelay: true ? '75ms' : '0ms' }}>
                            <div>
                                <PortfolioCard
                                    image={tmi}
                                    image_title="Trotter Manufacturing"
                                    card_title="Trotter Manufacturing"
                                    card_description="WordPress Website"
                                    link="/tmi"
                                />
                            </div>
                        </Zoom>
                        <Zoom in={true} style={{ transitionDelay: true ? '175ms' : '0ms' }}>
                            <div>
                                <PortfolioCard
                                    image={uwm}
                                    image_title="UWM College of Letters and Science"
                                    card_title="UWM College of Letters and Science"
                                    card_description="Front-End Web Developer"
                                    link="/uwm"
                                />
                            </div>
                        </Zoom>
                        <Zoom in={true} style={{ transitionDelay: true ? '75ms' : '0ms' }}>
                            <div>
                                <PortfolioCard
                                    image={iosCalc}
                                    image_title="iOS Calculator App"
                                    card_title="iOS Calculator App"
                                    card_description="iOS App"
                                    link="/ios-calc"
                                />
                            </div>
                        </Zoom>
                        <Zoom in={true} style={{ transitionDelay: true ? '175ms' : '0ms' }}>
                            <div>
                                <PortfolioCard
                                    image={calculator}
                                    image_title="Calculator App"
                                    card_title="Calculator App"
                                    card_description="React.js App"
                                    link="/calculator"
                                />
                            </div>
                        </Zoom>
                    </div>
                    <hr style={styles.hr} />
                    <img src={undraw_wireframe} className="port-img" alt="portfolio graphic" />
                </div>
            </Fade>
        </React.Fragment>
    )
}

export default Portfolio;
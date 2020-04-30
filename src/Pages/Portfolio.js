import React from 'react';
import { Helmet } from "react-helmet";
import Thumbnail from '../Components/Thumbnail.js';
import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';
import uwm from '../imgs/uwm.jpg';
import artworks from '../imgs/artworks.jpg';
import bpt from '../imgs/bpt.jpg';
import undraw_wireframe from '../imgs/undraw_wireframe.svg';
import tmi from '../imgs/tmi.jpg';
import calculator from '../imgs/calculator.jpg';


const styles = {
    hr: {
        borderColor: '#1165eb',
        width: '15%',
        height: '1px',
        background: '#1165eb',
        marginTop: '30px',
    },
};


function Portfolio(props) {
    return (
        <div>
            <Helmet>
                <title>Portfolio | Brendan Lenzner</title>
            </Helmet>
            <Fade in={true}>
                <div className="portfolio-content">
                    <h2 className="page-title">Portfolio</h2>
                    <div className="portfolio">
                        <Zoom in={true}>
                            <div>
                                <Thumbnail
                                    link="/uwm"
                                    image={uwm}
                                    alternate="University of Wisconsin-Milwaukee"
                                    title="UWM College of Letters and Science"
                                    category="Front-End Web Developer"
                                />
                            </div>
                        </Zoom>
                        <Zoom in={true} style={{ transitionDelay: true ? '75ms' : '0ms' }}>
                            <div>
                                <Thumbnail
                                    link="/artworks-mke"
                                    image={artworks}
                                    alternate="Artworks for Milwaukee"
                                    title="Artworks for Milwaukee"
                                    category="WordPress Website"
                                />
                            </div>
                        </Zoom>
                        <Zoom in={true} style={{ transitionDelay: true ? '175ms' : '0ms' }}>
                            <div>
                                <Thumbnail
                                    link="/bpt"
                                    image={bpt}
                                    alternate="UWM Behavioral Play Therapy"
                                    title="UWM Behavioral Play Therapy"
                                    category="WordPress Theme &amp; Website"
                                />
                            </div>
                        </Zoom>
                        <Zoom in={true} style={{ transitionDelay: true ? '275ms' : '0ms' }}>
                            <div>
                                <Thumbnail
                                    link="/tmi"
                                    image={tmi}
                                    alternate="Trotter Manufacturing"
                                    title="Trotter Manufacturing"
                                    category="WordPress Website"
                                />
                            </div>
                        </Zoom>
                        <Zoom in={true} style={{ transitionDelay: true ? '375ms' : '0ms' }}>
                            <div>
                                <Thumbnail
                                    link="/calculator"
                                    image={calculator}
                                    alternate="Calculator App"
                                    title="Calculator App"
                                    category="React.js App"
                                />
                            </div>
                        </Zoom>
                    </div>
                    <hr style={styles.hr} />
                    <img src={undraw_wireframe} className="port-img" alt="portfolio graphic" />
                </div>
            </Fade>
        </div>
    )
}

export default Portfolio;
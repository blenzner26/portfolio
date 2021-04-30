import React from "react";
import { Helmet } from "react-helmet";
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import Chip from '@material-ui/core/Chip';
import Card from '../Components/Card.js';
import BlueButtonLarge from "../Components/BlueButtonLarge.js";
import ImageRound from "../Components/ImageRound.js";
import undraw_site_content from '../imgs/undraw_site_content.svg';
import uwm_square from '../imgs/uwm_square.jpg';

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

function UWM(props) {
  return (
    <div>
      <Helmet>
        <title>UWM - Portfolio | Brendan Lenzner</title>
      </Helmet>

      <Fade in={true}>
        <div>
          <h2 className="page-title">University of Wisconsin-Milwaukee</h2>
          <h3 className="pos-title">College of Letters and Science | Student Front-End Web Developer</h3>
          <ImageRound source={uwm_square} alt="UWM logo" width="195px" height="195px" />
          <hr style={styles.hr} />
          <Chip style={styles.chip} label="WordPress" variant="outlined" /> <Chip style={styles.chip} label="HTML" variant="outlined" /> <Chip style={styles.chip} label="CSS" variant="outlined" /> <Chip style={styles.chip} label="SCSS" variant="outlined" /> <Chip style={styles.chip} label="PHP" variant="outlined" /> <Chip style={styles.chip} label="JavaScript" variant="outlined" /> <Chip style={styles.chip} label="Bootstrap" variant="outlined" /> <Chip style={styles.chip} label="Adobe Photoshop" variant="outlined" /> <Chip style={styles.chip} label="Adobe XD" variant="outlined" /> <br />
          <p>At the College of Letters &amp; Science at UWM, I was responsible for designing and creating several new websites using WordPress, HTML, and CSS as well as redesigning several existing sites. In addition, I was on a team that managed and maintatined over 70 websites for the college, assisting department staff and faculty with their web needs.</p>
          <hr style={styles.hr} />
          <h4 style={{ ...styles.margTop }}>New Websites</h4>
          <div className="site-cards">
            <Zoom in={true}><div><Card title="Center for Celtic Studies" link="https://uwm.edu/celtic-studies" classAdd="bl-card-blue" /></div></Zoom>
            <Zoom in={true} style={{ transitionDelay: true ? '50ms' : '0ms' }}><div><Card title="Global Studies" link="https://uwm.edu/global-studies" classAdd="bl-card-blue" /></div></Zoom>
            <Zoom in={true} style={{ transitionDelay: true ? '100ms' : '0ms' }}><div><Card title="International Studies" link="https://uwm.edu/international-studies" classAdd="bl-card-blue" /></div></Zoom>
            <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }}><div><Card title="Classics Program" link="https://uwm.edu/classics" classAdd="bl-card-blue" /></div></Zoom>
          </div>
          <br />
          <h4 style={{ ...styles.margTop }}>Website Redesigns</h4>
          <div className="site-cards">
            <Zoom in={true} style={{ transitionDelay: true ? '50ms' : '0ms' }}><div><Card title="Mathematical Sciences" link="https://uwm.edu/math" classAdd="bl-card-green" /></div></Zoom>
            <Zoom in={true} style={{ transitionDelay: true ? '100ms' : '0ms' }}><div><Card title="History" link="https://uwm.edu/history" classAdd="bl-card-green" /></div></Zoom>
            <Zoom in={true} style={{ transitionDelay: true ? '150ms' : '0ms' }}><div><Card title="Sociology" link="https://uwm.edu/sociology" classAdd="bl-card-green" /></div></Zoom>
            <Zoom in={true} style={{ transitionDelay: true ? '200ms' : '0ms' }}><div><Card title="Chemistry &amp; Biochemistry" link="https://uwm.edu/chemistry" classAdd="bl-card-green" /></div></Zoom>
            <Zoom in={true} style={{ transitionDelay: true ? '250ms' : '0ms' }}><div><Card title="Biological Sciences" link="https://uwm.edu/biology" classAdd="bl-card-green" /></div></Zoom>
          </div>
          <BlueButtonLarge toLink="/portfolio" buttonText="Back to Portfolio" arrow="left" />
          <br />
          <hr style={styles.hr} />
          <img src={undraw_site_content} className="port-img" alt="portfolio graphic" />
        </div>
      </Fade>
    </div>
  )
}

export default UWM;
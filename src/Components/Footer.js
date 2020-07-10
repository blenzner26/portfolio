import React from "react"
import linkedin from '../imgs/linkedin.png';
import github from '../imgs/github.png';

const styles = {
  copyright: {
    marginRight: "20px",
  },
  icon: {
    width: "35px",
    height: "35px",
    marginTop: "15px",
    marginLeft: "10px",
    marginRight: "10px",
  },

};


function Footer(props) {
  return (
    <div className="footer">
        <div className="footer-content">
            <div><p style={styles.copyright}>&copy; {(new Date().getFullYear())} Brendan Lenzner</p></div>
            <div><a href="https://www.linkedin.com/in/brendanlenzner"><img style={styles.icon} src={linkedin} width="80" alt="linkedin logo" /></a></div>
            <div><a href="https://github.com/blenzner26"><img style={styles.icon} src={github} width="80" alt="github logo" /></a></div>
        </div>
    </div>
  )
}
 
export default Footer;
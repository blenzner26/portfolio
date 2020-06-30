import React from "react";
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { Helmet } from "react-helmet";
import undraw_tabs from '../imgs/undraw_tabs.svg';
import linkedin from '../imgs/linkedin.png';
import email from '../imgs/email.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    zIndex: 1,
    position: 'relative',
    padding: 20,
    backgroundColor: '#282828',
    color: '#fefefe',
  }
}));

function Contact(props) {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>Contact | Brendan Lenzner</title>
        <link rel="canonical" href="https://brendanlenzner.com/contact" />
        <meta name="description" content="Need a WordPress site? Contact me for more information." />
      </Helmet>
      <Fade in={true}>
        <div className="contact-page">
          <h2 className="page-title">Contact</h2>
          <br />
          <p>Need a new website or assistance with your current site? Shoot me an email!</p>
          <div className="contact-info">
            <div className="email">
              <div><p><strong>Email</strong></p><a href="mailto:blenzner@brendanlenzner.com"><img src={email} width="85" alt="linkedin logo" /></a></div>
            </div>
            <div className="linkedin">
              <div><p><strong>LinkedIn</strong></p><a href="https://www.linkedin.com/in/brendanlenzner"><img src={linkedin} width="80" alt="linkedin logo" /></a></div>
            </div>

          </div>

          <br />
          <img className="contact-img" src={undraw_tabs} alt="contact graphic" />
          <Paper elevation={4} className={classes.paper}>
            <p>Brendan Lenzner | <a href="mailto:blenzner@brendanlenzner.com">blenzner@brendanlenzner.com</a></p>
          </Paper>
        </div>
      </Fade>
    </div>
  )
}

export default Contact;
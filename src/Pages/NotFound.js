import React from "react";
import { Helmet } from "react-helmet";
import undraw_404 from '../imgs/undraw_404.svg';
import BlueButtonLarge from "../Components/BlueButtonLarge.js";

const styles = {
  notFound: {
    width: '45%',
    marginTop: '40px',
    marginBottom: '40px',
  },
};

function NotFound(props) {
  return (
    <div>
      <Helmet>
        <title>Page Not Found | Brendan Lenzner</title>
      </Helmet>
      <h2>Oh no! The page you were looking for wasn't found!</h2>
      <img src={undraw_404} alt="Page not found" style={styles.notFound} />
      <br />
      <BlueButtonLarge toLink="/" buttonText="Back to Home" arrow="left" />
    </div>
  )
}

export default NotFound;
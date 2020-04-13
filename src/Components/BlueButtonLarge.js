import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
  buttonBlue: {
    background: 'transparent',
    border: '1px solid #fff',
    color: '#fff',
    padding: '15px 35px',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginTop: '30px',
    marginBottom: '30px',
  },
  arrowLeft: {
    paddingRight: '10px',
  },
  arrowRight: {
    paddingLeft: '10px',
  },
};

function BlueButtonLarge(props) {
  if (props.arrow === "right") {
    return (
      <Button variant="contained" style={{ ...styles.buttonBlue }} size="large" component={Link} to={props.toLink}>{props.buttonText}<i className="fas fa-arrow-right" style={{ ...styles.arrowRight }}></i></Button>
    )
  }
  else if (props.arrow === "left") {
    return (
      <Button variant="contained" style={{ ...styles.buttonBlue }} size="large" component={Link} to={props.toLink}><i className="fas fa-arrow-left" style={{ ...styles.arrowLeft }}></i>{props.buttonText}</Button>
    )
  }
  else {
    return (
      <Button variant="contained" style={{ ...styles.buttonBlue }} size="large" component={Link} to={props.toLink}>{props.buttonText}</Button>
    )
  }

}

export default BlueButtonLarge;
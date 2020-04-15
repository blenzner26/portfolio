import React from "react";
import Button from '@material-ui/core/Button';

const styles = {
  buttonBlue: {
    backgroundColor: '#1165eb',
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

function BlueButtonLargeN(props) {
  if (props.arrow === "right") {
    return (
      <Button className="blue-button" variant="contained" style={{ ...styles.buttonBlue }} size="large" href={props.href}>{props.buttonText}<i className="fas fa-arrow-right" style={{ ...styles.arrowRight }}></i></Button>
    )
  }
  else if (props.arrow === "left") {
    return (
      <Button className="blue-button" variant="contained" style={{ ...styles.buttonBlue }} size="large" href={props.href}><i className="fas fa-arrow-left" style={{ ...styles.arrowLeft }}></i>{props.buttonText}</Button>
    )
  }
  else {
    return (
      <Button className="blue-button" variant="contained" style={{ ...styles.buttonBlue }} size="large"  href={props.href}>{props.buttonText}</Button>
    )
  }

}

export default BlueButtonLargeN;
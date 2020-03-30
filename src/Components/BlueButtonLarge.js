import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'; 

const styles = {
  buttonBlue: {
    background: 'linear-gradient(45deg, #297ed0 30%, #00b8da 90%)',
    color: '#fff',
    padding: '15px 35px',
    fontWeight: 'bold',
    fontSize: '1rem'
  },
};

function BlueButtonLarge(props) {
  return (
    <Button variant="contained" style={{...styles.buttonBlue}}  size="large" component={Link} to={props.toLink}>{props.buttonText}<i className="fas fa-arrow-right"></i></Button>
  )
}

export default BlueButtonLarge;
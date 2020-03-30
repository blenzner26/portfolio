import React from "react";
import Button from '@material-ui/core/Button';

const styles = {
  buttonBlue: {
    background: 'linear-gradient(45deg, #297ed0 30%, #00b8da 90%)',
    color: '#fff',
    padding: '15px 35px',
    fontWeight: 'bold',
    fontSize: '1rem'
  },
};
 
function Contact(props) {
  return (
    <div className="contact-page">
      <h2 className="page-title">Contact</h2>
      <h3>Want to contact me?</h3>
      <p>Send an email:</p>
      <Button variant="contained" style={{...styles.buttonBlue}}  size="large" href="mailto:brendan@brendanlenzner.com">brendan@brendanlenzner.com <i className="fas fa-arrow-right"></i></Button>
    </div>
  )
}
 
export default Contact;
import React from "react";
import undraw_tabs from '../imgs/undraw_tabs.svg';
import linkedin from '../imgs/linkedin.png';
import email from '../imgs/email.png';
 
function Contact(props) {
  return (
    <div className="contact-page">
      <h2 className="page-title">Contact</h2>
      <div className="contact-info">
        <div className="email">
          <div><p><strong>Email</strong></p><a href="mailto:blenzner@brendanlenzner.com"><img src={email} width="85" alt="linkedin logo"/></a></div>
        </div>
        <div className="linkedin">
          <div><p><strong>LinkedIn</strong></p><a href="https://www.linkedin.com/in/brendanlenzner"><img src={linkedin} width="80" alt="linkedin logo"/></a></div>
        </div>
        
      </div>
     
      <br />
      <img className="contact-img" src={undraw_tabs} alt="contact graphic"/>

      <p>Brendan Lenzner | <a href="mailto:blenzner@brendanlenzner.com">blenzner@brendanlenzner.com</a></p>
    </div>
  )
}
 
export default Contact;
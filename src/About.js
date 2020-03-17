import React from "react";
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import web_design from "./web_design.jpg";
 

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, rgb(33, 150, 243) 30%, rgb(33, 203, 243) 90%);',
  border: 0,
  borderRadius: 3,
  boxShadow: 'rgba(33, 203, 243, 0.3) 1px 1px 1px 1px',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

function About(props) {
  return (
    <div>
      <h2 className="about-title">Hello!<br/> I'm Brendan,<br/>a web developer.</h2>
      <p className="about-text">Front End Developer | WordPress</p>

      <MyButton color="blue" href="/portfolio">View Portfolio <i class="fas fa-arrow-right"></i></MyButton>
    </div>
  )
}
 
export default About;
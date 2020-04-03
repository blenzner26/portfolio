import React from 'react';
 
function Card(props) {
  return (
    <a className={"bl-card " + props.classAdd} href={props.link}>
            <h4>{props.title}</h4>
            <p><strong>Visit website </strong><i className="fas fa-external-link-alt"></i></p>
    </a>
  )
}
 
export default Card;
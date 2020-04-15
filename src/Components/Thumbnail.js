import React from 'react';
import { Link } from 'react-router-dom';

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt={props.alternate} width="445" height="222"/>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </Link>
    </div>
  )
}

export default Thumbnail;
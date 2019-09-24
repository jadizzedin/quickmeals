import React from "react";
import './components.css';

function Card(props) {

  const background = {
    backgroundImage : `url(${process.env.PUBLIC_URL + props.data.image_url})`,
    backgroundSize: 'cover',
  }

  return (
    <div className="card">
      <div className= "images" style={background} />
      <h2>{props.data.title}</h2>
      <p>{props.data.description}</p>
    </div>
  )
}

export default Card;

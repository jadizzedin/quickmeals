import React, { useState } from 'react';
import './components.css';
import HeartCheckbox from 'react-heart-checkbox';

function Card(props) {

  const [checked, setChecked] = useState(false)

  const background = {
    backgroundImage : `url(${process.env.PUBLIC_URL + props.data.image_url})`,
    backgroundSize: 'cover',
  }

  return (
    <div className="card">
      <div className= "images" style={background} />
      <h2>{props.data.title}</h2>
      <p>{props.data.description}</p>
      <HeartCheckbox
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
    </div>
  )
}

export default Card;

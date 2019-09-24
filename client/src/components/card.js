import React, { useState } from 'react';
import './components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'

function Card(props) {

  const [checked, setChecked] = useState(false)



  const background = {
    backgroundImage : `url(${process.env.PUBLIC_URL + props.data.image_url})`,
    backgroundSize: 'cover',
  }

  return (
    <div className="card">
      <div className= "images" style={background}>
      {checked ? <FontAwesomeIcon
        className='card-icon'
        icon={fullHeart}
        color={'rgb(237,60,103)'}
        size={'2x'}
        onClick={() => setChecked(false)}/>
        :
        <FontAwesomeIcon
          className='card-icon'
          icon={emptyHeart}
          color={'white'}
          size={'2x'}
          onClick={() => setChecked(true)}/>
        }
        <FontAwesomeIcon
          className='card-icon'
          icon={faCartPlus}
          color={'white'}
          size={'2x'} />
      </div>
      <h2>{props.data.title}</h2>
      <p className="card-description">{props.data.description}</p>
    </div>
  )
}

export default Card;

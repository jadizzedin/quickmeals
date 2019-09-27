import React from 'react';
import Card from './card';
import './components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Main(props) {

  const cards = props.cardData.map((card, id) => {
    return <Card
      key={id}
      data={card}
    />
  });

  return (
    <div className="main">
      <div className="banner">
        <FontAwesomeIcon
          className="banner-icon"
          icon={faChevronLeft}
          color={'white'}
          size={'5x'}/>
        <FontAwesomeIcon
          className="banner-icon"
          icon={faChevronRight}
          color={'white'}
          size={'5x'}/>
      </div>
        <h1 className='title'>Quickmeals</h1>
        <h4 className='description'>Meal prep made easy!</h4>
      <div className="card-container">
      {cards}
      </div>
    </div>
  );
}

export default Main;

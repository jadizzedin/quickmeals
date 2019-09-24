import React from 'react';
import Card from './card';
import './components.css';

function Main(props) {

  const cards = props.cardData.map((card, id) => {
    return <Card
      key={id}
      data={card}
    />
  });

  return (
    <div className="main">
      <h1> MAIN </h1>
      <div className="card-container">
      {cards}
      </div>
    </div>
  );
}

export default Main;

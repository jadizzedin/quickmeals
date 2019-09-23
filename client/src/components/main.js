import React from 'react';
import Div from './div';
import './components.css';

function Main(props) {
  return (
    <div className="main">
      <h1> MAIN </h1>
      <div className="div-container">
        <Div />
        <Div />
        <Div />
        <Div />
        <Div />
      </div>
    </div>
  );
}

export default Main;

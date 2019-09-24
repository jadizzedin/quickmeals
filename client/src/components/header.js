import React from "react";
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons'


function Header(props) {
  return (
    <div className="header">

        <img className="header-logo" src={require("../assets/pan-logo.png")}/>

        <div className="web-input">
          <input
            className="input"
            type="text" placeholder="Keywords"
            className="input"
            type="text"
            placeholder="Keywords"
            onChange={(e) => props.handleChange(e)}/>
          <button
            className='filter-button'
            placeholder="Filter"
            id="filter"
            type="text"
            onClick={(e) => props.handleFilter(e)}>Filter
          </button>
        </div>

        <div className="iconic">
          <FontAwesomeIcon
            className="icon"
            icon={faSearch}
            color={'black'}
            size={'2x'}
            onClick={(e) => props.handleFilter(e)}/>
          <FontAwesomeIcon
            className="icon"
            icon={faCartPlus}
            color={'black'}
            size={'2x'}/>
          <FontAwesomeIcon
            className="icon"
            icon={faEllipsisV}
            color={'black'}
            size={'2x'}/>
        </div>

        <div className="right-side">
          <span className="element">About</span>&nbsp;
          <span className="element">Saved</span>&nbsp;
          <span className="element" >Settings</span>&nbsp;
          <span className="element" >Checkout</span>
        </div>

    </div>
  )
}

export default Header;

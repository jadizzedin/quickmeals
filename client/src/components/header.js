import React from "react";
import './header.css'


function Header(props) {
  return (
    <div className="header">

        <img className="header-logo"  src="assets/xxxx"/>

        <div className="web-input">
          <input
            className="input"
            type="text"
            placeholder="Keywords"
            onChange={(e) => props.handleChange(e)}
            />
          <button
            className="input"
            id="filter"
            type="text"
            placeholder="Filter"
            onClick={(e) => props.handleFilter(e)}
            />
        </div>

        <div className="right-side">
          <i className="fas fa-cart-plus"></i>&nbsp;
          <i className="fas fa-search"></i>&nbsp;
          <span className="element">About</span>&nbsp;
          <span className="element">Saved</span>&nbsp;
          <span className="element" >Settings</span>&nbsp;
          <span className="element" >Checkout</span>
        </div>

    </div>
  )
}

export default Header;

import React from "react";
import './filter.css'

function Filter(props) {

  const filterClass = props.activeFilter ? 'active' : 'inactive'

  return (
    <div className={filterClass}>
      <h1> FILTER </h1>
    </div>
  )
}

export default Filter;

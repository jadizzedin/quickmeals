import React from "react";
import './filter.css'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Filter(props) {

  const filterClass = props.activeFilter ? 'active' : 'inactive'

  return (
    <div className={filterClass}>
      <div className="content-container">

      <div className="input-wrapper-filter">
          <FontAwesomeIcon
            className="search-icon-filter"
            icon={faSearch}
            color={"black"}
            size={'1x'}/>
        <input
        className="input-filter"
        type="text"
        placeholder="Keywords" />
      </div>

        <div className="meal-text">
          <p>Meal ></p>
        </div>
        <div className="meal">
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
        </div>
        <div className="cuisine-text">
          <p>Cuisine ></p>
        </div>
        <div className="cuisine">
          <button>Italian</button>
          <button>Thai</button>
          <button>Mexican</button>
        </div>
        <div className="diet-rest-text">
          <p>Dietary Restrictions ></p>
        </div>
        <div className="diet-rest">
          <button>Vegan</button>
          <button>Vegetarian</button>
          <button>GF</button>
        </div>
        <div className="apply">
          <button id= "apply" >Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Filter;

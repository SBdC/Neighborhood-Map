import React from "react";
import Search from "./Search.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'


const LocationList = (props) => {
  if (props.filteredLocations.length === 0) {
    return(
      <div style={props.style}>
        <Search {...props} />
        <div className="App-location-list">
          <p tabIndex='3'> No results found</p>
          <div className="icon-frown"> <FontAwesomeIcon icon ={ faFrown } /></div>
        </div>
    </div>
    );

  }


  return(
    <div style={props.style}>
      <Search {...props} />
      <nav className="App-location-list">
        <ul className="location-list">

          {props.filteredLocations.map(location => (
            <div className="list"
              key={location.id}>
             <div className="icon-arrow"> <FontAwesomeIcon className="arrow" icon ={ faArrowRight }  /></div>
            <li
              tabIndex='3'
              role='tab'
              aria-setsize='6'
              aria-posinset={location.id}
              name={location.name}
              onClick={() => props.onClick({ ...location })}
              onKeyPress={() => props.onClick({ ...location })}
            >
              {location.name}
            </li>
            </div>
          ))}
        </ul>
      </nav>
  </div>
  )

}

export default LocationList;

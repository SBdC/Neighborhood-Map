import React from "react";
import Search from "./Search.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

const LocationList = props => {
  if (props.filteredLocations.length === 0) {
    return (
      <div style={props.style}>
        <Search {...props} />
        <div className="App-location-list">
          <p> No results found</p>
          <div className="icon-frown">
            {" "}
            <FontAwesomeIcon className="arrow" icon={faFrown} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={props.style}>
      <Search {...props} />
      <div className="App-location-list">
        <ul className="location-list">
          {props.filteredLocations.map(location => (
            <div className="list" key={location.id}>
              <div className="icon-arrow">
                {" "}
                <FontAwesomeIcon className="arrow" icon={faArrowRight} />
              </div>
              <li
                name={location.name}
                onClick={() => props.onClick({ ...location })}
              >
                {location.name}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationList;

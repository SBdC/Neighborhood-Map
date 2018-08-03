import React, { Component } from "react";
import Search from "./Search.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'

class LocationList extends Component {

  render() {
    const { filteredLocations } = this.props;

    return  (
      <div style={this.props.style}>
        <Search {...this.props} />
        <div className="App-location-list">
          <ul className="location-list">
            {filteredLocations.map(location => (
              <div className="list">
               <div className="icon-arrow"> <FontAwesomeIcon className="arrow" icon ={ faArrowRight }  /></div>
              <li
                key={location.id}
                name={location.name}
                onClick={() => this.props.onClick({ ...location })}
              >
                {location.name}
              </li>
              </div>
            ))}
          </ul>
        </div>
</div>

    )
  }
}

export default LocationList;

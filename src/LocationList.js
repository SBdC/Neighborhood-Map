import React, { Component } from "react";
import Search from "./Search.js";

class LocationList extends Component {

  render() {
    const { filteredLocations } = this.props;

    return  (
      <div style={this.props.style}>
        <div className="App-location-list">
        <Search {...this.props} />
      
          <ul className=".location-list">
            {filteredLocations.map(location => (
              <li
                key={location.id}
                name={location.name}
                onClick={() => this.props.onClick({ ...location })}
              >
                {location.name}
              </li>
            ))}
          </ul>
        </div>
</div>

    )
  }
}

export default LocationList;

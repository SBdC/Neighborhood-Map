import React, { Component } from "react";
import Location from "./locations.json";

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: Location
    };
  }

  onlistClick(e) {
    console.log("clicki" + e.target);
  }

  render() {
    const { locations } = this.state;

    return (
      <div style={this.props.style}>
        <div className="App-location-list">
          <div className="search-locations">
            <form className="search-locations-bar">
              {/* {JSON.stringify(this.state)} */}
              <input
                type="text"
                placeholder="Search for a local independet business"
              />
            </form>
            <div>
              <ul className=".location-list">
                {locations.map(location => (
                  <li key={location.id} onClick={this.onlistClick}>
                    {location.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationList;

import React, { Component } from "react";

class LocationList extends Component {
  state = {
    query: "",
    filteredLocations: this.props.locations
  };

  updateQuery = query => {
    this.setState({ query });
      const filteredLocations = this.props.locations.filter(location => {
      const loc = location.name.toLowerCase();
      const q= query.toLowerCase();

      return (
        loc.indexOf(q) !== -1
      );

    });
    this.setState({ filteredLocations });
  };

  render() {
    return (
      <div style={this.props.style}>
        <div className="App-location-list">
          <div className="input-group">
            <form className="search-locations-bar">
              {JSON.stringify(this.state.query)}
              <input
                type="text"
                placeholder="Search for a local independet business"
                value={this.state.query}
                onChange={event => this.updateQuery(event.target.value)}
              />
            </form>
          </div>
          <ul className=".location-list">
            {this.state.filteredLocations.map(location => (
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
    );
  }
}

export default LocationList;

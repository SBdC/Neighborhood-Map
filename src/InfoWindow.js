import React, { Component } from "react";

class Info extends Component {

  render() {
    const { currentLocation } = this.props;
    return currentLocation ? (
      <div className="location-info">
        <h3>{currentLocation.name}</h3>
        <h4>{currentLocation.id}</h4>
          <h5>{currentLocation.title}</h5>
      </div>
    ) : (
      <div className="location-info-none" />
    );
  }
}

export default Info;

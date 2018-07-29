import React, { Component } from "react";

class Info extends Component {

  render() {
    const { currentLocation } = this.props;
    return currentLocation ? (
      <div className="location-info">
        <h3>{currentLocation[0]}</h3>
        <h4>{currentLocation[1]}</h4>
      </div>
    ) : (
      <div className="location-info-none" />
    );
  }
}

export default Info;

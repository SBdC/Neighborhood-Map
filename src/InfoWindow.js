import React, { Component } from "react";


class Info extends Component {

  render() {
    const { currentLocation, photos } = this.props;
    return currentLocation ? (
      <div className="location-info">
        <h3>{currentLocation.name}</h3>
        <h4>{currentLocation.id}</h4>
          <h5>{currentLocation.title}</h5>

           <p><img src={photos}></img></p>
      </div>

    ) : (
      <div className="location-info-none" />
    );
  }
}

export default Info;

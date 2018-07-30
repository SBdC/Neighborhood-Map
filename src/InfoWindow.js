import React, { Component } from "react";


class Info extends Component {

  render() {
    const { currentLocation, photos, photoTitle } = this.props;
    return currentLocation ? (
      <div className="location-info">
        <h3>{currentLocation.name}</h3>
        <h4>{currentLocation.id}</h4>
          <h5>{currentLocation.title}</h5>
           <h6>{photoTitle}</h6>
          <div className="flickerphoto"><img  alt={photoTitle} src={photos}></img></div>
      </div>

    ) : (
      <div className="location-info-none" />
    );
  }
}

export default Info;

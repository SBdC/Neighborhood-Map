import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


class Info extends Component {

  render() {
    const { currentLocation, photos } = this.props;
    return currentLocation ? (
      <div className="location-info">
        <button   onClick={() => this.props.closeInfo()}> <div className="icon-close"> <FontAwesomeIcon icon={ faTimes }  /></div></button>
        <h3>{currentLocation.name}</h3>
        <h4>{currentLocation.id}</h4>
          <h5>{currentLocation.title}</h5>

          <div ><img  className="flickerPhoto" alt={currentLocation.name} src={photos}></img></div>
      </div>

    ) : (
      <div className="location-info-none" />
    );
  }
}

export default Info;

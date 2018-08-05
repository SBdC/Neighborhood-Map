import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


class Info extends Component {

  render() {
    const { currentLocation, photos } = this.props;
    return currentLocation ? (
      <div className="location-info">
        <div className="first-bar"><button  onClick={() => this.props.closeInfo()}> <div className="icon-close"> <FontAwesomeIcon icon={ faTimes }  /></div></button></div>
        <h2 className = "info-heading">{currentLocation.name}</h2>
        <p className = "info-p">{currentLocation.title}</p>
        <div className = "pic-add-wrapper">
            <div className = "info-img"><img  className="flickerPhoto" alt={currentLocation.name} src={photos}></img></div>
        <div className = "info-add">
            <p  className = "info-add-p">{currentLocation.street}</p>
              <p  className = "info-add-p">{currentLocation.zip}</p>

        </div>


        </div>
      </div>

    ) : (
      <div className="location-info-none" />
    );
  }
}

export default Info;

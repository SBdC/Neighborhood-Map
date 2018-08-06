import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

class Info extends Component {
  render() {
    const { currentLocation, photos, flickrError } = this.props;
    return currentLocation ? (
      <div className="location-info">
        <div className="first-bar">
          <button tabIndex="10" aria-label="Close" onClick={() => this.props.closeInfo()} onKeyPress={() => this.props.closeInfo()}>

            <div className="icon-close">

              <FontAwesomeIcon icon={faTimes} />
            </div>
          </button>
        </div>
        <h2 className="info-heading">
          {currentLocation.name} {currentLocation.type}
        </h2>
        <p className="info-p" >
          {currentLocation.street}, {currentLocation.zip}
        </p>

        <div className="pic-add-wrapper">
          {flickrError ? (
            <div>
              <p className="error">

                We are sorry, an error occur with the flickrAPI. Try again later
              </p>
              <div className="icon-frown-api">

                <FontAwesomeIcon icon={faFrown} />
              </div>
            </div>
          ) : (
            <div className="info-img">
              <img
                className="flickerPhoto"
                alt={currentLocation.name}
                src={photos}
              />
            </div>
          )}
        </div>
        <p className="info-credit">
          photo powered by Flickr
        </p>
      </div>
    ) : (
      <div className="location-info-none" />
    );
  }
}

export default Info;

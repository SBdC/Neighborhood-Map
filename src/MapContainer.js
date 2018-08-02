import React, { Component } from "react";
import { Map, InfoWindow, Marker } from "google-maps-react";
import Info from "./InfoWindow.js";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      center: {
        lat: 52.529746,
        lng: 13.401511
      },
      initialCenter: {
        lat: 52.529746,
        lng: 13.401511
      }
    };


  }

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,

      });
    }
  };

  centerMoved(mapProps, map) {
    console.log("dragging");
  }


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });





  render() {
    const { zoom, style, google, locations, currentLocation} = this.props;
    const { selectedPlace, center } = this.state;

    return (
      <div style={style}>
        <div className="App-map">
          <Map
            google={google}
            containerStyle={{
              width: "100%",
              height: "100vh",
              position: "relative"
            }}
            initialCenter={{
              lat: this.state.initialCenter.lag,
              lng: this.state.initialCenter.lag
            }}
            center={
              currentLocation
                ? {
                    lat: `${currentLocation.position.lat}`,
                    lng: `${currentLocation.position.lng}`
                  }
                : { lat: `${center.lat}`, lng: `${center.lng}` }
            }
            zoom={currentLocation ? 18 : zoom}
            locations={locations}
            onClick={this.onMapClicked}
            onDragend={this.centerMoved}
          >
            {currentLocation ? (
              <Marker
                key={currentLocation.id}
                position={{
                  lat: currentLocation.position.lat,
                  lng: currentLocation.position.lng
                }}
                name={currentLocation.name}
                onClick={this.onMarkerClick}
                title={currentLocation.title}
                animation={google.maps.Animation.BOUNCE}

              />
            ) : (
              locations.map(location => (
                <Marker
                  key={location.id}
                  position={{
                    lat: location.position.lat,
                    lng: location.position.lng
                  }}
                  name={location.name}
                  onClick={this.onMarkerClick}
                  title={location.title}
                />
              ))
            )}

            <InfoWindow
              onOpen={this.windowHasOpened}
              onClose={this.windowHasClosed}
              marker={this.state.activeMarker}
              visible={(currentLocation )? false : this.state.showingInfoWindow}

            >
              <div>
                <h1>{selectedPlace.name}</h1>
                <p>{selectedPlace.title}</p>
              </div>
            </InfoWindow>


          </Map>
        </div>
      </div>
    );
  }
}

export default MapContainer;

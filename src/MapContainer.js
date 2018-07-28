import React, { Component } from "react";
import { Map, InfoWindow, Marker } from "google-maps-react";
import Location from "./locations.json";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      center: {
        lat: 52.529746,
        lng: 13.401511
      },
      zoom: 15,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  componentDidMount() {
    this.getLocations();
  }

  getLocations() {
    let locations = Location;

    this.setState({
      locations: locations
    });
  }

  mapClicked(mapProps, map, clickEvent) {
    this.setState({
      center: {
        lat: map.center.lat(),
        lng: map.center.lng()
      }
    });
    this.getLocations();
  }

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
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
    const { style, google } = this.props;
    const { zoom, locations, selectedPlace } = this.state;

    return (
      <div style={style}>
        <div className="App-map">
          <Map
            google={google}
            initialCenter={{
              lat: this.state.center.lat,
              lng: this.state.center.lng
            }}
            center={{ lat: this.state.center.lat, lng: this.state.center.lng }}
            zoom={zoom}
            locations={locations}
            onClick={this.onMapClicked}
            onDragend={this.centerMoved}
          >
            {locations.map(location => (
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
            ))}

            <InfoWindow
              onOpen={this.windowHasOpened}
              onClose={this.onInfoWindowClose}
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
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

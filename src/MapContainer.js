import React, { Component } from "react";
import { Map, Marker } from "google-maps-react";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},

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

  // onMapClicked = props => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //
  //     });
  //   }
  // };

  centerMoved(mapProps, map) {
    console.log("dragging");
  }

  //
  // onMarkerClick = (props, marker, e) =>
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });



  render() {
    const { zoom, style, google, locations, currentLocation, filteredLocations} = this.props;
    const { center } = this.state;

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

            center={ currentLocation ? {
                    lat: `${currentLocation.position.lat}`,
                    lng: `${currentLocation.position.lng}`
                  } : { lat: `${center.lat}`, lng: `${center.lng}` }}
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
                title={currentLocation.title}
                animation={google.maps.Animation.BOUNCE}

              />
            ) : (
              filteredLocations.map(location => (
                <Marker
                  key={location.id}
                  position={{
                    lat: location.position.lat,
                    lng: location.position.lng
                  }}
                  name={location.name}
                  onClick={() => this.props.onClick({ ...location })}
                  title={location.title}
                />
              ))
            )}



          </Map>
        </div>
      </div>
    );
  }
}

export default MapContainer;

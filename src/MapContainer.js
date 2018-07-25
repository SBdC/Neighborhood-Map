import React, { Component } from 'react';
import { Map, InfoWindow, Marker } from 'google-maps-react';
import Location from './locations.json';


class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      center: {
        lat: 52.515580,
        lng: 13.392806
      }
    }
  }

  componentDidMount() {
    this.getLocations();

  }

  getLocations() {
  let locations = Location;

  this.setState({
    locations: locations
  })

console.log(this.state.locations, locations)
}


  render() {




    return (

      <div style={this.props.style}>
      <div className="App-map">
      <Map google={this.props.google}
        initialCenter={{lat: this.state.center.lat, lng: this.state.center.lng}}
         center={{lat: this.state.center.lat, lng: this.state.center.lng}}
          zoom={15}
          locations={this.state.locations}
        >
          {this.state.locations.map(location => (
                     <Marker
                       key={location.id}
                       lat={location.position.lat}
                       lng={location.position.lng}
                       name={location.name}
                       eventHandler={this.eventHandler}
                     />
        ))}

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>


    </div>
  </div>
    );
  }
}


export default MapContainer

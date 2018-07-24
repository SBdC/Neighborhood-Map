import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
       center: {lat: 52.529600, lng: 13.403557}
    }
  }

  render() {
    return (
      <div style={this.props.style}>
        <div className="App-map">
      <Map google={this.props.google}
        initialCenter={{lat: this.state.center.lat, lng: this.state.center.lng}}
         center={{lat: this.state.center.lat, lng: this.state.center.lng}}
          zoom={15}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

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

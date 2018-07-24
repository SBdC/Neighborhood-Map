import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import MapContainer from './MapContainer.js';
import LocationList from './LocationList.js';
import {GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
    <main style={{display:'flex'}}>
       <LocationList
       style={{flex: 2}}/>
       <MapContainer
        style={{flex: 5}}
        google={this.props.google}

       />
     </main>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCycO-mcdm4s7R0U4EsFYS-T7WhWy5Eb2E'
})(App)

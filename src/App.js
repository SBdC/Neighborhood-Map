import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import MapContainer from "./MapContainer.js";
import LocationList from "./LocationList.js";
import { GoogleApiWrapper } from "google-maps-react";
import Location from "./locations.json";
import Info from "./InfoWindow.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      center: {
        lat: 52.529746,
        lng: 13.401511
      },
      zoom: 15,
      currentLocation: ''
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

  onlistClick = id => {
    let location = id;
    this.setState({
      currentLocation: location
    });
    console.log(location);
  };

  render() {


    return (
      <div className="App">
        <Header />
        <main style={{ display: "flex" }}>
          <section style={{ flex: 2 }}>
            <form className="search-locations-bar">
              {/* {JSON.stringify(this.state)} */}
              <input
                type="text"
                placeholder="Search for a local independet business"
              />
            </form>
            <LocationList
              locations={this.state.locations}
              onClick={this.onlistClick}
            />
          </section>

          <MapContainer
            style={{ flex: 6 }}
            google={this.props.google}
            locations={this.state.locations}
            currentLocation={this.state.currentLocation}

          />
          <Info
            currentLocation={this.state.currentLocation}
          />
        </main>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDQVyeULB47LrpKKNRa4_3Eka6duAwqqoo"
})(App);

import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import MapContainer from "./MapContainer.js";
import LocationList from "./LocationList.js";
import { GoogleApiWrapper } from "google-maps-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main style={{ display: "flex" }}>
          <LocationList style={{ flex: 2 }} />
          <MapContainer style={{ flex: 6 }} google={this.props.google} />
        </main>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDQVyeULB47LrpKKNRa4_3Eka6duAwqqoo"
})(App);

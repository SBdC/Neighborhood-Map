import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import * as FlickrAPI from "./utils/FlickrAPI";
import "./App.css";
import Header from "./Header.js";
import MapContainer from "./MapContainer.js";
import LocationList from "./LocationList.js";
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
      currentLocation: "",
      photos: [],
      query: "",
      filteredLocations: []

    };
  }

  componentDidMount() {
    this.getLocations();

  }

  getFlickrPhoto() {
    FlickrAPI.getFlickrPhoto(this.state.currentLocation.name)
      .then(data => {
        let picArray = data.photos.photo.map(pic => {
          let srcPath =
            "https://farm" +
            pic.farm +
            ".staticflickr.com/" +
            pic.server +
            "/" +
            pic.id +
            "_" +
            pic.secret +
            ".jpg";

          return srcPath;
        });

        this.setState({
          photos: picArray
        });
      })
      .catch(error => console.log(error));
  }


  // get locations from json and makes the list show all locations

  getLocations() {
    let locations = Location;
    this.setState({
      locations: locations,
      filteredLocations: locations
    });
  }

  // Click function that makes extra info appear


  onlistClick = location => {
    this.setState(
      {
        currentLocation: location
      },
      this.getFlickrPhoto
    );
  };


  selectedMarker = location => {
    this.setState(
      {
        currentLocation: location
      },
      this.getFlickrPhoto
    );
  };



  // Search function

  updateQuery = (query) => {

    this.setState({ query });

    if (query) {
      const filteredLocations = this.state.locations.filter(location => {
        const loc = location.name.toLowerCase();
        const q = query.toLowerCase();
        return loc.indexOf(q) !==-1;
      });
      this.setState({ filteredLocations });
    } else {
      this.setState({
        filteredLocations: this.state.locations
      });
    }
  };



  closeInfo = () => {
    this.setState({
      currentLocation: '',

  });
};


  render() {
    return (
      <div className="App">
        <Header />
        <main style={{ display: "flex" }}>
          <section style={{ flex: 2 }}>
            <LocationList
              locations={this.state.locations}
              onClick={this.onlistClick}
              updateQuery={this.updateQuery}
              query={this.state.query}
              filteredLocations={this.state.filteredLocations}
            />
          </section>
          <section style={{ flex: 5 }}>
            <MapContainer
              google={this.props.google}
              locations={this.state.locations}
              currentLocation={this.state.currentLocation}
              onClick={this.selectedMarker}
              filteredLocations={this.state.filteredLocations}

            />
            {/* / Extra Infowindow that appears when clicking on the list*/}
            <Info
              currentLocation={this.state.currentLocation}
              photos={this.state.photos}
              closeInfo={this.closeInfo}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDQVyeULB47LrpKKNRa4_3Eka6duAwqqoo"
})(App);

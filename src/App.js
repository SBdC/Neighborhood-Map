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
      currentLocation: "",
      photos: []
    };
  }

  componentDidMount() {
    this.getLocations();
    this.getFlickrPhoto();
  }

  getFlickrPhoto() {
    const url =
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ea70cd6f2b3058e251b48212d2fe6d08&tags=berlin&per_page=1&format=json&nojsoncallback=1";

    fetch(url)
      .then(response => {
        return response.json();
      })

      .then(data => {
        console.log(JSON.stringify(data));
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

  getLocations() {
    let locations = Location;
    this.setState({
      locations: locations
    });
  }

  onlistClick = location => {
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
          <section style={{ flex: 5 }}>
            <MapContainer
              google={this.props.google}
              locations={this.state.locations}
              currentLocation={this.state.currentLocation}
            />
            <Info
              currentLocation={this.state.currentLocation}
              photos={this.state.photos}
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

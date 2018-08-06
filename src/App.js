import React, { Component } from "react"
import { GoogleApiWrapper } from "google-maps-react"
import * as FlickrAPI from "./utils/FlickrAPI"
import "./App.css"
import Header from "./Header.js"
import Footer from "./Footer.js"
import MapContainer from "./MapContainer.js"
import LocationList from "./LocationList.js"
import Location from "./locations.json"
import Info from "./InfoWindow.js"



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      center: {
        lat: 52.529746,
        lng: 13.401511
      },
      zoom: 16,
      currentLocation: "",
      photos: [],
      query: "",
      filteredLocations: [],
      flickrError: false

    };
  }

  componentDidMount() {
    this.getLocations();
  }

  getFlickrPhoto() {
    FlickrAPI.getFlickrPhoto(this.state.currentLocation.id)
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
      .catch(err => {
            this.setState({
                flickrError: true
            })
        })
  }


  // get locations from json and makes the list show all locations

  getLocations() {
    let locations = Location;
    this.setState({
      locations: locations,
      filteredLocations: locations
    });
  }



  onlistandMarkerClick = location => {
    this.setState(
      {
        currentLocation: location
      },
      this.getFlickrPhoto
    );
  };



  // Search function

  updateQuery = (query) => {
    this.setState({currentLocation: "" });
    this.setState({ query: query.substr(0,15) });


    if (query) {
        const filteredLocations = this.state.locations.filter(location => {
        const loc = location.name.toLowerCase();
        const q = query.toLowerCase();
        return loc.indexOf(q) === 0;
      });
      this.setState({ filteredLocations });

    }
     else {
      this.setState({
        filteredLocations: this.state.locations
      });

    }
  };

//Close infoWindow

  closeInfo = () => {
    this.setState({
      currentLocation: ''

  });
};





toggleList = () => {
  let el = document.querySelector('.locationList');
   el.classList.toggle('locationList-open');
   this.setState({
     currentLocation: '',
     query:''

 });

};


  render() {
    return (
      <div className="App">
        <Header
         onClick={this.toggleList}
        />
        <main className="main-wrapper">
          <section className="locationList">
            <LocationList
              locations={this.state.locations}
              onClick={this.onlistandMarkerClick}
              updateQuery={this.updateQuery}
              query={this.state.query}
              filteredLocations={this.state.filteredLocations}
              currentLocation={this.state.currentLocation}

            />
          </section>
          <section className="mapContainer">
            <MapContainer
              google={this.props.google}
              locations={this.state.locations}
              currentLocation={this.state.currentLocation}
              onClick={this.onlistandMarkerClick}
              filteredLocations={this.state.filteredLocations}
            />

            <Info
              currentLocation={this.state.currentLocation}
              photos={this.state.photos}
              closeInfo={this.closeInfo}
              flickrError={this.state.flickrError}
            />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDQVyeULB47LrpKKNRa4_3Eka6duAwqqoo"
})(App);

import React, { Component } from "react";

const LocationList = (props) => (

    <div style={props.style}>
      <div className="App-location-list">

            <ul className=".location-list">
              {props.locations.map(location => (
                <li key={location.id} onClick={this.onlistClick}>
                  {location.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

)



export default LocationList;

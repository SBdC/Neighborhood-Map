import React from "react";


const LocationList = (props) => (

    <div style={props.style}>
      <div className="App-location-list">

            <ul className=".location-list">
              {props.locations.map(location => (
                <li key={location.id}  name={location.name} onClick={() => props.onClick({...location})}>
                  {location.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

)



export default LocationList;

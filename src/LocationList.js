import React from 'react'

const LocationList = (props) => (

  <div style={props.style}>
    <div className="App-location-list">
      <div className="search-locations">
        <form className="search-locations-bar">
                   {/* {JSON.stringify(this.state)} */}
         <input type="text"
                placeholder="Search for a local independet business"

        />
    </form>

    </div>
  </div>
  </div>

)

export default LocationList

import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Search extends Component {
  render() {
    return (
      <div className="input-group">

        <form className="search-locations-bar">
         <div className="icon-search"> <FontAwesomeIcon icon={ faSearch }  /></div>
          <input
            type="text"
            placeholder= "Search locations"
            onChange={(event) => this.props.updateQuery(event.target.value)}
            value={this.props.query}


          />
        </form>
      </div>
    );
  }
}

export default Search;

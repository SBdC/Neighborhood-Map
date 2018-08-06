import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const Search = (props) => {

  return(
    <div>
      <form className="search-locations-bar">
       <div className="icon-search"> <FontAwesomeIcon icon={ faSearch } /></div>
        <input
          type="text"
          placeholder= "Search locations"
          tabIndex="2"
          role="search"
          onChange={(event) => props.updateQuery(event.target.value)}
          value={props.query}

        />
      </form>
    </div>
  )

}

export default Search;

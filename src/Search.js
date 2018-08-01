import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="input-group">
        <form className="search-locations-bar">
          {JSON.stringify(this.props.query)}
          <input
            type="text"
            placeholder="Search for a local independet business"
            onChange={(event) => this.props.updateQuery(event.target.value)}
            value={this.props.query}
          />
        </form>
      </div>
    );
  }
}

export default Search;

import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(ev) {
    this.props.onInputHandler(ev.target.value);
  }

  render() {
    return (
      // <label for="searchbar">Filter by ingredients:</label>
      <input
        className="searchbar"
        id="searchbar"
        type="text"
        placeholder="Search..."
        value={this.props.value}
        onChange={this.onInputChange}
      />
    );
  }
}

export default Searchbar;

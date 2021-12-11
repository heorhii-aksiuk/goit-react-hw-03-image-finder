import React, { Component } from 'react';

class Searchbar extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <header>
        <input onChange={onChange}></input>
      </header>
    );
  }
}

export default Searchbar;

import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    searchValue: '',
  };

  handleOnChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <>
        <Searchbar onChange={this.handleOnChange} />
      </>
    );
  }
}

export default App;

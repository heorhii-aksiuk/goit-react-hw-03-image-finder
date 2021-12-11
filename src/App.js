import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    searchValue: '',
  };

  handleSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    return (
      <>
        <Searchbar onSubmitGet={this.handleSubmit} />
      </>
    );
  }
}

export default App;

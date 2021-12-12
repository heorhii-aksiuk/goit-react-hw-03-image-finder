import React, { Component } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
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
        <ImageGallery></ImageGallery>
      </>
    );
  }
}

export default App;

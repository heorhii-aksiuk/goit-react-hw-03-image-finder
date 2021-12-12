import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageGalleryItem from './components/ImageGallery/ImageGalleryItem/ImageGalleryItem';

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
        <ImageGallery />
      </>
    );
  }
}

export default App;

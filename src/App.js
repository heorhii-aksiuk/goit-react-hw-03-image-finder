import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageGalleryItem from './components/ImageGallery/ImageGalleryItem/ImageGalleryItem';

class App extends Component {
  state = {
    searchValue: '',
    items: null,
  };

  handleSubmit = searchValue => {
    this.setState({ searchValue });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevRequest = prevState.searchValue;
    const currentRequest = this.state.searchValue.trim();

    if (prevRequest !== currentRequest) {
      if (currentRequest !== '')
        fetch(
          `https://pixabay.com/api/?q=${currentRequest}&page=1&key=24011643-a99499b85595b827654661749&image_type=photo&orientation=horizontal&per_page=12`,
        )
          .then(response => {
            console.log(response);
            return response.json();
          })
          .then(response => {
            console.log(response);
            return this.setState({ items: response.hits });
          })
          .catch(console.log);
    }
  }

  render() {
    const { items } = this.state;
    return (
      <>
        <Searchbar onSubmitGet={this.handleSubmit} />
        {items && <ImageGallery items={items} />}
      </>
    );
  }
}

export default App;

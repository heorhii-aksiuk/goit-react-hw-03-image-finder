import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ApiService from './services/apiService';

const apiSevice = new ApiService();

class App extends Component {
  state = {
    searchValue: '',
    items: null,
  };

  handleSubmit = searchValue => {
    this.setState({ searchValue });
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevRequest = prevState.searchValue;
    const currentRequest = this.state.searchValue.trim();

    if (prevRequest !== currentRequest) {
      if (currentRequest !== '') apiSevice.searchQuery = currentRequest;
      try {
        const apiResponse = await apiSevice.fetchImages();
        this.setState({ items: apiResponse });
      } catch (error) {
        console.log(error);
      }
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

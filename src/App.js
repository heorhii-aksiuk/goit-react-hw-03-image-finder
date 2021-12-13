import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import apiService from './services/apiService';
import Button from './components/Button/Button';

// const apiSevice = new ApiService();

class App extends Component {
  state = {
    searchValue: '',
    items: null,
    page: 1,
  };

  handleSubmit = searchValue => {
    this.setState({ searchValue });
  };

  handleLoadMore = () => {
    this.setState(state => ({
      page: state.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevRequest = prevState.searchValue;
    const currentRequest = this.state.searchValue.trim();
    const prevPage = prevState.page;
    const currentPage = this.state.page;
    const firstPage = 1;

    if (currentRequest === '') {
      return;
    } else if (currentRequest !== prevRequest) {
      this.setState({ page: firstPage, items: null });
      apiService(currentRequest, firstPage)
        .then(items => this.setState({ items }))
        .catch(console.log);
    } else if (currentPage !== firstPage && currentPage !== prevPage) {
      apiService(currentRequest, currentPage)
        .then(newItems =>
          this.setState({ items: [...this.state.items, ...newItems] }),
        )
        .catch(console.log);
    }
  }

  render() {
    const { items } = this.state;
    return (
      <>
        <Searchbar onSubmitGet={this.handleSubmit} />
        {items && <ImageGallery items={items} />}
        <Button loadMore={this.handleLoadMore} />
      </>
    );
  }
}

export default App;

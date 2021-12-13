import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import apiService from './services/apiService';
import Button from './components/Button/Button';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    items: null,
    error: null,
    status: Status.IDLE,
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
      this.setState({
        page: firstPage,
        items: null,
        status: Status.PENDING,
      });
      apiService(currentRequest, firstPage)
        .then(items =>
          this.setState({
            items,
            status: Status.RESOLVED,
          }),
        )
        .catch(error =>
          this.setState({
            error,
            status: Status.REJECTED,
          }),
        );
    } else if (currentPage !== firstPage && currentPage !== prevPage) {
      apiService(currentRequest, currentPage)
        .then(newItems =>
          this.setState({
            items: [...this.state.items, ...newItems],
            status: Status.RESOLVED,
          }),
        )
        .catch(error =>
          this.setState({
            error,
            status: Status.REJECTED,
          }),
        );
    }
  }

  render() {
    const { items, status } = this.state;
    return (
      <>
        <Searchbar onSubmitGet={this.handleSubmit} />
        {items && <ImageGallery items={items} />}

        {status === Status.PENDING && (
          <Loader type="Oval" color="#00BFFF" height={100} width={100} />
        )}

        {status === Status.RESOLVED && (
          <Button loadMore={this.handleLoadMore} />
        )}
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { loadMore } = this.props;
    return (
      <button onClick={loadMore} type="button">
        Load more
      </button>
    );
  }
}

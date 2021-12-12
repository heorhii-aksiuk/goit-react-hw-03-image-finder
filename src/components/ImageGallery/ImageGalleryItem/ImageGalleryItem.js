import React, { Component } from 'react';
// import PropTypes from 'prop-types'

class ImageGalleryItem extends Component {
  static propTypes = {};

  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    return (
      <li key={id} className="gallery-item">
        <img src={webformatURL} alt={largeImageURL} />
      </li>
    );
  }
}

export default ImageGalleryItem;

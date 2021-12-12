import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <li className="gallery-item">
        <img src={webformatURL} alt={largeImageURL} />
      </li>
    );
  }
}

export default ImageGalleryItem;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  render() {
    const { webformatURL, largeImageURL, showFull, tags } = this.props;
    return (
      <li className="gallery-item">
        <img
          onClick={() => showFull(largeImageURL)}
          src={webformatURL}
          alt={tags}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;

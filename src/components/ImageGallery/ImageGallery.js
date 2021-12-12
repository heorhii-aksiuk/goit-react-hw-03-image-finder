import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ),
  };

  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(item => (
          <ImageGalleryItem
            key={item.id}
            webformatURL={item.webformatURL}
            largeImageURL={item.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './components/ImageGallery/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      }),
    ),
  };

  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(item => (
          <ImageGalleryItem
            id={item.id}
            webformatURL={item.webformatURL}
            largeImageURL={item.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

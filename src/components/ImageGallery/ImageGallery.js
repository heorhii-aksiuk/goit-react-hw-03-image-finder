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
    const { items, showFull } = this.props;
    return (
      <ul>
        {items.map(item => (
          <ImageGalleryItem
            key={item.id}
            showFull={showFull}
            webformatURL={item.webformatURL}
            largeImageURL={item.largeImageURL}
            tags={item.tags}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

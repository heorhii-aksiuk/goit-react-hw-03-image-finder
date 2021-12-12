import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    const { children } = this.props;
    return <ul>{children}</ul>;
  }
}

export default ImageGallery;

import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="overlay">
        <div className="modal">{children}</div>
      </div>
    );
  }
}

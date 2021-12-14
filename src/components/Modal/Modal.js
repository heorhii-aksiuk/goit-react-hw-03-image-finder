import React, { Component } from 'react';
import s from './Modal.module.css';

export default class Modal extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={s.overlay}>
        <div className={s.modal}>{children}</div>
      </div>
    );
  }
}

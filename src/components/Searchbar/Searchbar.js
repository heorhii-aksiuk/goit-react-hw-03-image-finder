import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  static propTypes = {
    onSubmitGet: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmitGet } = this.props;
    const { value } = this.state;
    onSubmitGet(value);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            onChange={this.handleChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

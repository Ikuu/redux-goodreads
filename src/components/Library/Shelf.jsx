import React, { Component, PropTypes } from 'react';

const propTypes = {
  shelf: PropTypes.object.isRequired,
};

const defaultProps = {
};

export default class Shelf extends Component {
  render() {
    return (
      <ul>
        <a onClick={() => this.props.filter(this.props.shelf)}>{this.props.shelf.label} ({this.props.shelf.count})</a>
      </ul>
    );
  }
}

Shelf.propTypes = propTypes;
Shelf.defaultProps = defaultProps;

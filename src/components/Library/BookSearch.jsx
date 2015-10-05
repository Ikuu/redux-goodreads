import React, { Component, PropTypes } from 'react';

const propTypes = {
  search: PropTypes.func.isRequired,
};

const defaultProps = {
};

export default class BookSearch extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search For Books or Authors..."
          onChange={event => this.props.search(event.target.value)}
        />
      </div>
    );
  }
}

BookSearch.propTypes = propTypes;
BookSearch.defaultProps = defaultProps;

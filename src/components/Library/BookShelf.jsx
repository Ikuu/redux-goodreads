import React, { Component, PropTypes } from 'react';
import Shelf from './Shelf';

const propTypes = {
  shelves: PropTypes.object.isRequired,
  filter: PropTypes.func.isRequired,
};

const defaultProps = {
};

export default class BookShelf extends Component {
  render() {
    const shelves = this.props.shelves.map((shelf, index) => {
      return <Shelf key={index} shelf={shelf} filter={this.props.filter}/>;
    });
    return (
      <div>
        <h3>Bookshelves</h3>
        <div>
          {shelves}
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = propTypes;
BookShelf.defaultProps = defaultProps;

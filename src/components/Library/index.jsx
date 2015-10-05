import React, { Component, PropTypes } from 'react';
import BookList from './BookList';
import BookShelf from './BookShelf';
import BookSearch from './BookSearch';

const propTypes = {
  username: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  books: PropTypes.object.isRequired,
  shelves: PropTypes.object.isRequired,
  deleteBook: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
};

const defaultProps = {
  username: 'Ikuu',
};

export default class Library extends Component {
  render() {
    return (
      <div>
        <h2>Library for {this.props.username}</h2>

        <BookSearch search={this.props.search}/>

        <div className="col-md-2">
          <BookShelf
            shelves={this.props.shelves}
            filter={this.props.filter}
          />
        </div>

        <div className="col-md-10">
          {
            this.props.books.size === 0
              ? <span>No books</span>
              : <BookList
                  books={this.props.books}
                  delete={this.props.deleteBook}
                  sort={this.props.sort}
                />
          }
        </div>
      </div>
    );
  }
}

Library.propTypes = propTypes;
Library.defaultProps = defaultProps;

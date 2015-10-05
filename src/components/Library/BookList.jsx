import React, { Component, PropTypes } from 'react';
import Book from './Book';

const propTypes = {
  books: PropTypes.object.isRequired,
  delete: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
};

const defaultProps = {
};

export default class BookList extends Component {
  render() {
    const books = this.props.books.map((book, index) => {
      return <Book key={index} book={book} delete={this.props.delete}/>;
    });
    return (
      <div className="row">
        <table className="table table-hover">
          <thead>
            <th onClick={ () => this.props.sort('thumbnail') }>Cover</th>
            <th onClick={ () => this.props.sort('name') }>Title</th>
            <th onClick={ () => this.props.sort('author') }>Author</th>
            <th onClick={ () => this.props.sort('pages') }>Num. Pages</th>
            <th onClick={ () => this.props.sort('shelves') }></th>
          </thead>

          <tbody>
            {books}
          </tbody>
        </table>
      </div>
    );
  }
}

BookList.propTypes = propTypes;
BookList.defaultProps = defaultProps;

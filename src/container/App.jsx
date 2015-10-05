import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as BookActions from '../actions/';
import Library from '../components/Library';
import BookApi from '../api/BookApi';

const propTypes = {
  winner: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
  sortBooks: PropTypes.func.isRequired,
  loadAll: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
  books: PropTypes.object.isRequired,
  shelves: PropTypes.object.isRequired,
};

const defaultProps = {
  winner: 'Nobody',
};

class App extends Component {
  componentWillMount() {
    this.props.loadAll(BookApi.getAllBooks());
  }

  render() {
    return (
      <Library
        books={this.props.books}
        shelves={this.props.shelves}
        username={this.props.winner}
        deleteBook={id => this.props.deleteBook(id)}
        sort={field => this.props.sortBooks(field)}
        search={field => this.props.searchBooks(field)}
        filter={field => this.props.filterBooks(field)}
      />
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    winner: state.get('winner'),
    books: state.get('books'),
    shelves: state.get('shelves'),
  };
}

export default connect(mapStateToProps, BookActions)(App);

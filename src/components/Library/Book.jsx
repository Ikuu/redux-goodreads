import React, { Component, PropTypes } from 'react';

const propTypes = {
  book: PropTypes.object.isRequired,
  delete: PropTypes.func.isRequired,
};

const defaultProps = {
};

export default class Book extends Component {
  render() {
    return (
      <tr>
        <td>
          <img
            src={this.props.book.thumbnail}
            height="77"
            width="50"
          />
        </td>
        <td>{this.props.book.name}</td>
        <td>{this.props.book.author}</td>
        <td>{this.props.book.pages}</td>
        <td><a href="#" onClick={ () => this.props.delete(this.props.book.id)}>Delete</a></td>
      </tr>
    );
  }
}

Book.propTypes = propTypes;
Book.defaultProps = defaultProps;

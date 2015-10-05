import { books } from './BookData';
import __ from 'lodash';

const _clone = function _clone(item) {
  return JSON.parse(JSON.stringify(item));
  // return cloned copy so that the item is passed by value instead of by reference
};

class BookApi {
  getAllBooks() {
    return _clone(books);
  }

  getBookById(id) {
    const book = __.find(books, { id: id });
    return _clone(book);
  }

  deleteBook(id) {
    __.remove(books, { id: id });
  }
}

const _BookApi = new BookApi();

export default _BookApi;

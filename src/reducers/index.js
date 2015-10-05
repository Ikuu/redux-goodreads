import { searchBooks, deleteBook, setBooks, sortBooks, filterBooks, INITIAL_STATE} from '../core';
import { SEARCH_BOOKS, LOAD_ALL, DELETE_BOOK, SORT_BOOKS, FILTER_BOOKS } from '../constants/ActionTypes';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_ALL:
    return setBooks(state, action.books);
  case DELETE_BOOK:
    return deleteBook(state, action.id);
  case SEARCH_BOOKS:
    return searchBooks(state, action.text);
  case SORT_BOOKS:
    return sortBooks(state, action.filter);
  case FILTER_BOOKS:
    return filterBooks(state, action.filter);
  default:
    return state;
  }
}

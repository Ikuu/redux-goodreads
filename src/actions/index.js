import { SEARCH_BOOKS, LOAD_ALL, DELETE_BOOK, SORT_BOOKS, FILTER_BOOKS } from '../constants/ActionTypes';

export function searchBooks(text) {
  return {
    type: SEARCH_BOOKS,
    text,
  };
}

export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    id,
  };
}

export function loadAll(books) {
  return {
    type: LOAD_ALL,
    books,
  };
}

export function sortBooks(filter) {
  return {
    type: SORT_BOOKS,
    filter,
  };
}

export function filterBooks(filter) {
  return {
    type: FILTER_BOOKS,
    filter,
  };
}

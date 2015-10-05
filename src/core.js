// undo
// store actions that have been performed and then run through the reducer as a batch
// so when adding a book save it to history as action.type and then action.book

// need to clean up adding shelves and interacting with them
// shelf data should be done server side and passed in.
// currently it is hard-coded to remove from '3' to update the 'all ' shelf
import { Map, OrderedMap, List } from 'immutable';

export const INITIAL_STATE = new Map({
  currentFilter: 'SHOW_ALL',
  winner: 'Alexander',
  currentSort: 'name',
  shelves: new List(),
  originalBooks: new OrderedMap(),
  books: new OrderedMap(),
});

export function deleteBook(state, id) {
  const books = state.get('books', new OrderedMap());
  const obooks = state.get('originalBooks', new OrderedMap());
  let shelves = state.get('shelves');
  const book = books.get(id);

  shelves = shelves.update(book.shelves, (shelf) => {
    return {
      id: shelf.id,
      label: shelf.label,
      count: shelf.count - 1,
    };
  }).update(0, (shelf) => {
    return {
      id: shelf.id,
      label: shelf.label,
      count: shelf.count - 1,
    };
  });

  return state.set('books', books.remove(id))
              .set('originalBooks', obooks.remove(id))
              .set('shelves', shelves);
}

export function setBooks(state, books) {
  const shelves = [
    {
      'id': 0,
      'label': 'all',
      'count': books.length,
    },
    {
      'id': 1,
      'label': 'read',
      'count': 0,
    },
    {
      'id': 2,
      'label': 'currently-reading',
      'count': 0,
    },
    {
      'id': 3,
      'label': 'to-read',
      'count': 0,
    },
  ];

  let shelfList = new List();
  shelves.forEach(shelf => {
    shelfList = shelfList.push({
      id: shelf.id,
      label: shelf.label,
      count: shelf.count,
    });
  });

  let booksList = new OrderedMap();
  books.forEach(book => {
    booksList = booksList.set(book.id, {
      id: book.id,
      name: book.name,
      author: book.author,
      thumbnail: book.thumbnail,
      pages: book.pages,
      shelves: book.shelves,
      rating: book.rating,
    });

    shelfList = shelfList.update(book.shelves, (shelf) => {
      return {
        id: shelf.id,
        label: shelf.label,
        count: shelf.count + 1,
      };
    });
  });
  return state.set('books', booksList.sortBy(book => book[state.get('currentSort')]))
              .set('shelves', shelfList)
              .set('originalBooks', booksList);
}

export function searchBooks(state, text) {
  const books = state.get('originalBooks');
  const booksNameSort = books.filter(book => book.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
  const booksAuthorSort = books.filter(book => book.author.toLowerCase().indexOf(text.toLowerCase()) > -1);
  const booksSort = booksNameSort.merge(booksAuthorSort).sortBy(book => book[state.get('currentSort')]);
  return state.set('books', booksSort);
}

export function sortBooks(state, filter) {
  let books = state.get('books');
  const currentSort = state.get('currentSort');

  currentSort === filter
    ? books = books.reverse()
    : books = books.sortBy((book) => book[filter]);

  return state.set('currentSort', filter)
              .set('books', books);
}

export function filterBooks(state, filter) {
  const originalBooks = state.get('originalBooks').sortBy(book => book[state.get('currentSort')]);
  if (filter.label === 'all') return state.set('books', originalBooks);
  const filteredBooks = originalBooks.filter((book) => (book.shelves === filter.id));
  return state.set('books', filteredBooks);
}

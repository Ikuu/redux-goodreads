import { expect } from 'chai';
import { describe, it } from 'mocha';
import { searchBooks, deleteBook, loadAll, sortBooks, filterBooks } from '../../src/actions';
import { books } from '../../src/api/BookData';

describe('Actions Unit Test', () => {
  it('searchBook() should return type and text', () => {
    const search = searchBooks('Ender');
    expect(search).to.have.all.keys('type', 'text');
    expect(search.type).to.equal('SEARCH_BOOKS');
    expect(search.text).to.equal('Ender');
  });

  it('deleteBook() should return type and id', () => {
    const dBook = deleteBook(1);
    expect(dBook).to.have.all.keys('type', 'id');
    expect(dBook.type).to.equal('DELETE_BOOK');
    expect(dBook.id).to.equal(1);
  });

  it('loadAll() should return type and books', () => {
    const loadBooks = loadAll(books);
    expect(loadBooks).to.have.all.keys('type', 'books');
    expect(loadBooks.type).to.equal('LOAD_ALL');
    expect(loadBooks.books[1].name).to.equal('Hyperion');
  });

  it('sortBooks() should return type and filter', () => {
    const sBooks = sortBooks('author');
    expect(sBooks).to.have.all.keys('type', 'filter');
    expect(sBooks.type).to.equal('SORT_BOOKS');
    expect(sBooks.filter).to.equal('author');
  });

  it('sortBooks() should return type and filter', () => {
    const fBooks = filterBooks('all');
    expect(fBooks).to.have.all.keys('type', 'filter');
    expect(fBooks.type).to.equal('FILTER_BOOKS');
    expect(fBooks.filter).to.equal('all');
  });
});

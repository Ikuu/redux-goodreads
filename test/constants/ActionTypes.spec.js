import { expect } from 'chai';
import { describe, it } from 'mocha';
import { SEARCH_BOOKS, LOAD_ALL, DELETE_BOOK, SORT_BOOKS, FILTER_BOOKS } from '../../src/constants/ActionTypes';

describe('ActionTypes String Check', () => {
  it('Should return SEARCH_BOOKS', () => {
    expect(SEARCH_BOOKS).to.equal('SEARCH_BOOKS');
  });

  it('Should return LOAD_ALL', () => {
    expect(LOAD_ALL).to.equal('LOAD_ALL');
  });

  it('Should return DELETE_BOOK', () => {
    expect(DELETE_BOOK).to.equal('DELETE_BOOK');
  });

  it('Should return SORT_BOOKS', () => {
    expect(SORT_BOOKS).to.equal('SORT_BOOKS');
  });

  it('Should return FILTER_BOOKS', () => {
    expect(FILTER_BOOKS).to.equal('FILTER_BOOKS');
  });
});

import { createReducer, on } from '@ngrx/store';
import { BooksApiActions } from './books.action';
import { Book } from './books.model';

const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);

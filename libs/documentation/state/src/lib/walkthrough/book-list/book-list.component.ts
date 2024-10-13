import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../state/books.model';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'lib-book-list',
  templateUrl: './book-list.component.html',
  imports: [
    NgForOf
  ],
  standalone: true
})
export class BookListComponent {
  @Input()
  books: ReadonlyArray<Book> = [];
  @Output()
  add = new EventEmitter<string>();
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../state/books.model';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'lib-book-collection',
  templateUrl: './book-collection.component.html',
  imports: [
    NgForOf
  ],
  standalone: true
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}

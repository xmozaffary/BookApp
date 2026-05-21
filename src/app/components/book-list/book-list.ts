import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  imports: [RouterLink],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    console.log('ngOnInit körs');
    this.bookService.getAll().subscribe((books: Book[]) => {
      console.log('böcker :', books);
      this.books = books;
    });
  }

  delete(id: number) {
    this.bookService.delete(id).subscribe(() => {
      this.books = this.books.filter((b) => b.id !== id);
    });
  }
}

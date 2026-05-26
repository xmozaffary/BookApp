import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  books = signal<Book[]>([]);

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getAll().subscribe((books: Book[]) => {
      this.books.set(books);
    });
  }

  delete(id: number) {
    this.bookService.delete(id).subscribe(() => {
      this.books.update((books) => books.filter((b) => b.id !== id));
    });
  }
}

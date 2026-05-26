import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book.model';
import { AuthService } from './auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = `${environment.apiUrl}/book`;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  private getHeaders() {
    const token = this.authService.getToken();
    console.log('token:', token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getAll() {
    return this.http.get<Book[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getById(id: number) {
    return this.http.get<Book>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  create(book: Book) {
    return this.http.post<Book>(this.apiUrl, book, { headers: this.getHeaders() });
  }

  update(id: number, book: Book) {
    return this.http.put(`${this.apiUrl}/${id}`, book, { headers: this.getHeaders() });
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}

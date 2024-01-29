import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AddBook, BookData, EditBook } from './shared/models/books.model';
import { HttpService } from '../shared/services/http.service';

const BOOK_URL = 'https://65b66fbbda3a3c16ab00b6a1.mockapi.io/api/books/books';

@Injectable({ providedIn: 'root' })
export class BookService {
  bookList: BookData[];
  constructor(private http: HttpService) {
    this.bookList = [];
  }

  getBooks(): Observable<BookData[]> {
    return this.http.get(BOOK_URL, {});
  }
  getDetailBook(id: string): Observable<BookData> {
    return this.http.get(`${BOOK_URL}/${id}`, {});
  }
  addBook(data: AddBook): Observable<any> {
    return this.http.post(`${BOOK_URL}`, {
      ...data,
    });
  }
  editBook(id: string, data: AddBook): Observable<any> {
    return this.http.put(`${BOOK_URL}/${id}`, {
      ...data,
    });
  }
  deleteBook(id: string): Observable<any> {
    return this.http.delete(`${BOOK_URL}/${id}`, {});
  }
}

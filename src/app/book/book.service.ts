import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { BookData, BookDataDetail } from './shared/models/books.model';
import { HttpService } from '../shared/services/http.service';

const BOOK_URL = 'https://api.itbook.store/1.0/new';
const BOOK_SEARCH_URL = 'https://api.itbook.store/1.0/search';
const BOOK_DETAIL_URL = 'https://api.itbook.store/1.0/books';

@Injectable({ providedIn: 'root' })
export class BookService {
  bookList: BookData[];
  constructor(private http: HttpService) {
    this.bookList = [];
  }

  getBooks(): Observable<{ books: BookData[] }> {
    return this.http.get(BOOK_URL, {});
  }
  getDetailBook(id: string): Observable<BookDataDetail> {
    return this.http.get(`${BOOK_DETAIL_URL}/${id}`, {});
  }
}

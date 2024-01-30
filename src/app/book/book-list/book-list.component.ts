import { Component, OnInit } from '@angular/core';
import { User } from '../../auth/shared/models/User';
import { AuthService } from '../../auth/auth.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ToolbarModule } from 'primeng/toolbar';
import { AddBook, BookData } from '../shared/models/books.model';
import { BookService } from '../book.service';
import { DataViewModule } from 'primeng/dataview';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DataViewModule,
    NgFor,
    NgClass,
    RouterModule,
    ToolbarModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    NgIf,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  public listBooks: BookData[] = [];
  visible: boolean = false;
  isEdit: string = '';
  submit = false;
  searchText = '';
  public addBookForm: AddBook = {
    title: '',
    subtitle: '',
    authors: '',
    publisher: '',
    pages: 0,
    year: 0,
    rating: 0,
    desc: '',
    price: 0,
    image: '',
    language: '',
  };
  constructor(
    private bookService: BookService,
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (list) => {
        this.listBooks = list;
      },
    });
  }
  onSearch() {
    if (this.searchText) {
      this.bookService.getBooks().subscribe({
        next: (list) => {
          this.listBooks = list.filter((item) =>
            item.title.includes(this.searchText)
          );
        },
      });
    } else {
      this.bookService.getBooks().subscribe({
        next: (list) => {
          this.listBooks = list;
        },
      });
    }
  }
  onSubmit() {
    if (this.isEdit) {
      this.bookService.editBook(this.isEdit, this.addBookForm).subscribe({
        next: (data) => {
          this.hideDialog();
          this.bookService.getBooks().subscribe({
            next: (list) => {
              this.listBooks = list;
            },
          });
        },
      });
    } else {
      this.bookService.addBook(this.addBookForm).subscribe({
        next: (data) => {
          this.hideDialog();
          this.bookService.getBooks().subscribe({
            next: (list) => {
              this.listBooks = list;
            },
          });
        },
      });
    }
  }
  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe({
      next: (data) => {
        this.bookService.getBooks().subscribe({
          next: (list) => {
            this.listBooks = list;
          },
        });
      },
    });
  }
  showDialog() {
    this.visible = true;
  }
  showEditDialog(book: BookData) {
    this.visible = true;
    this.isEdit = book.id;
    this.addBookForm = {
      title: book.title,
      subtitle: book.subtitle,
      authors: book.authors,
      publisher: book.publisher,
      pages: book.pages,
      year: book.year,
      rating: book.rating,
      desc: book.desc,
      price: book.price,
      image: book.image,
      language: book.language,
    };
  }
  hideDialog() {
    this.visible = false;
    this.isEdit = '';
    this.addBookForm = {
      title: '',
      subtitle: '',
      authors: '',
      publisher: '',
      pages: 0,
      year: 0,
      rating: 0,
      desc: '',
      price: 0,
      image: '',
      language: '',
    };
  }
}

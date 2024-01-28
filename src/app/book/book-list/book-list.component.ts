import { Component, OnInit } from '@angular/core';
import { User } from '../../auth/shared/models/User';
import { AuthService } from '../../auth/auth.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { BookData } from '../shared/models/books.model';
import { BookService } from '../book.service';
import { DataViewModule } from 'primeng/dataview';
import { NgClass, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DataViewModule, NgFor, NgClass, RouterModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  public listBooks: BookData[] = [];
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (list) => {
        this.listBooks = list.books;
      },
    });
  }
}

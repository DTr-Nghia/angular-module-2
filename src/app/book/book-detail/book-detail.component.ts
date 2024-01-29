import { Component } from '@angular/core';
import { BookData } from '../shared/models/books.model';
import { BookService } from '../book.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { SplitterModule } from 'primeng/splitter';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [ImageModule, SplitterModule, RatingModule, FormsModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
})
export class BookDetailComponent {
  public book: BookData = {} as BookData;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id') as string;
      this.bookService.getDetailBook(id).subscribe({
        next: (data) => {
          this.book = data;
        },
      });
    });
  }
}

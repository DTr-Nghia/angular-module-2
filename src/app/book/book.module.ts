import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { FormsModule } from '@angular/forms';
import { BookRoutingModule } from './book-routing.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BookRoutingModule,
        BookListComponent,
        BookDetailComponent
    ],
    exports: [],
    providers: [],
})
export class BookModule { }
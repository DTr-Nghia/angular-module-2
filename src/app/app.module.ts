import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BookModule } from './book/book.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CartReducer } from './store/cart.reducer';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    BookModule,
    StoreModule.forRoot({ cart: CartReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

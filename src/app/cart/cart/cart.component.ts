import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../cart.service';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RatingModule,
    FormsModule,
    ButtonModule,
    TableModule,
    InputNumberModule,
    NgIf,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  public listCart: CartItem[];
  constructor(
    public authService: AuthService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((data) => (this.listCart = data));
  }
  updateQuantity(item: CartItem, value: string) {
    this.cartService.updateQuantity(item, Number(value));
  }
  removeItem(id: string) {
    this.cartService.removeItem(id);
  }
  removeAll() {
    this.cartService.clearCartItem();
  }
}

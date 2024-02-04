import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartTotal = new BehaviorSubject<number>(0);
  cartTotal$ = this.cartTotal.asObservable();
  private cartItems: CartItem[] = [];
  private cartItemsSource = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSource.asObservable();

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      this.cartItemsSource.next(this.cartItems);
      this.cartTotal.next(
        this.cartItems.reduce((total, item) => item.quantity + total, 0)
      );
    }
  }

  updateCart(product: CartItem, quantityAdd: number) {
    let existingProduct = this.cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantityAdd;
    } else {
      existingProduct = { ...product, quantity: quantityAdd };
      this.cartItems.push(existingProduct);
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.cartItemsSource.next(this.cartItems);
    this.cartTotal.next(
      this.cartItems.reduce((total, item) => item.quantity + total, 0)
    );
  }
  updateQuantity(product: CartItem, quantityAdd: number) {
    let existingProduct = this.cartItems.find((item) => item.id === product.id);
    if (quantityAdd > 0) {
      existingProduct.quantity = quantityAdd;
    } else {
      existingProduct.quantity = 0;
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.cartItemsSource.next(this.cartItems);
    this.cartTotal.next(
      this.cartItems.reduce((total, item) => item.quantity + total, 0)
    );
  }
  clearCartItem() {
    localStorage.removeItem('cartItems');
    this.cartItems = [];
    this.cartItemsSource.next(this.cartItems);
    this.cartTotal.next(0);
  }

  removeItem(id?: string) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    this.cartTotal.next(
      this.cartItems.reduce((total, item) => item.quantity + total, 0)
    );
    this.cartItemsSource.next(this.cartItems);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}

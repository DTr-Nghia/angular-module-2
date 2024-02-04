import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';
@NgModule({
  imports: [CommonModule, FormsModule, CartComponent, CartRoutingModule],
  exports: [],
  providers: [],
})
export class CartModule {}

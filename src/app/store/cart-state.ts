import { CartItem } from '../cart/models/cart.model';

export interface CartState {
  readonly cart: CartItem[];
}

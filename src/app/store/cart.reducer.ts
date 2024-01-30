import { CartItem } from '../cart/models/cart.model';
import { CartAction, CartActionTypes } from './cart.action';

const initialState: CartItem[] = [];

export function CartReducer(
  state: CartItem[] = initialState,
  action: CartAction
) {
  switch (action.type) {
    // Add
    case CartActionTypes.ADD_ITEM:
      return [...state, action.payload];
    // Delete Single
    case CartActionTypes.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    // Delete All
    case CartActionTypes.DELETE_All_ITEM:
      return [];
    // Update
    case CartActionTypes.UPDATE_ITEM:
      return state.map((newsItem) => {
        if (newsItem.id === action.payload.id) {
          return { ...newsItem, ...action.payload };
        }
        return newsItem;
      });
    default:
      return state;
  }
}

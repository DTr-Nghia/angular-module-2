import { Action } from '@ngrx/store';
import { CartItem } from '../cart/models/cart.model';

export enum CartActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  DELETE_ITEM = '[SHOPPING] Delete Item',
  DELETE_All_ITEM = '[SHOPPING] Delete All Item',
  UPDATE_ITEM = '[SHOPPING] Update Item',
}

// Add
export class AddItemAction implements Action {
  readonly type = CartActionTypes.ADD_ITEM;
  constructor(public payload: CartItem) {}
}
// Delete Single
export class DeleteItemAction implements Action {
  readonly type = CartActionTypes.DELETE_ITEM;
  constructor(public payload: string) {}
}
// Delete All
export class DeleteAllItemAction implements Action {
  readonly type = CartActionTypes.DELETE_All_ITEM;
  constructor() {}
}
// Update
export class UpdateItemAction implements Action {
  readonly type = CartActionTypes.UPDATE_ITEM;
  constructor(public payload: CartItem) {}
}

export type CartAction =
  | AddItemAction
  | DeleteItemAction
  | DeleteAllItemAction
  | UpdateItemAction;

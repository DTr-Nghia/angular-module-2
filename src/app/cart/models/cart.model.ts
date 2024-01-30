import { BookData } from '../../book/shared/models/books.model';

export interface CartItem {
  id: string;
  quantity: number;
  price: number;
  book: BookData;
}

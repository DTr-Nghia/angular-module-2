export interface BookData {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn13: string;
  pages: number;
  year: number;
  rating: number;
  desc: string;
  price: number;
  image: string;
  url: string;
  language: string;
}

export interface AddBook {
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  pages: number;
  year: number;
  rating: number;
  desc: string;
  price: number;
  image: string;
  language: string;
}
export interface EditBook extends AddBook {
  id: string;
}

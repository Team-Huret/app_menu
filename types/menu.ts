export interface Category {
  name: string;
  order: number;
  data: Subcategory[];
}

export interface Entry {
  id: string;
  order: number;
  name: string;
  price: number;
}

export interface Subcategory {
  id: string;
  order: number;
  name: string;
  data: Entry[];
}

export interface Menu {
  menu: Category[];
}

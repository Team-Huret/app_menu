export interface Menu {
  menu: Category[];
}
export interface Category {
  name: string;
  order: number;
  data: Subcategory[];
}
export interface Subcategory {
  id: string;
  order: number;
  name: string;
  data: Entry[];
}

export interface Entry {
  id: string;
  order: number;
  name: string;
  base_price: number;
  description: string;
  photo: string;
  labels: Label[] | [];
  allergies: string[];
  options: Option[] | [];
}
export interface Label {
  name: string;
  class_name: string;
  icon: string;
}
export interface Option {
  name: string;
  price: number;
}

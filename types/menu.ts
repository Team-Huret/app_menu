export interface Category {
  ID: number;
  CreatedAt?: string;
  UpdatedAt?: string;
  DeletedAt?: string;
  Name: string;
  Order?: number;
  MenuID?: number;
  Subcategories?: Subcategory[];
}

export interface Entry {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  Name: string;
  Order: number;
  Description: string;
  Photo: string;
  Labels: string[];
  Allergies: string[];
  BasePrice: number;
  Options: Option[];
  SubcategoryID: number;
  Badge: string;
}

export interface Subcategory {
  ID: number;
  CategoryID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  Name: string;
  Order: number;
  MenuID: number;
  Description: string;
  Entries: Entry[];
}

export interface Menu {
  BusinessID: number;
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  Categories: Category[];
}

export interface Option {
  Name: string;
  Price: number;
}

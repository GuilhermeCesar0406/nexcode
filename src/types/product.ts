export type ProductUnit = "kg" | "un" | "pct";

export type ProductCategory =
  | "Bovinos"
  | "Suínos"
  | "Aves"
  | "Embutidos"
  | "Mercearia";

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  unit: ProductUnit;
  salePrice: number;
  stock: number;
  minimumStock: number;
  expirationDate: string | null;
}
export interface DashboardStats {
  salesToday: number;
  salesMonth: number;
  totalProducts: number;
  lowStockProducts: number;
}

export interface SalesData {
  date: string;
  value: number;
}

export interface TopProduct {
  name: string;
  quantity: number;
  revenue: number;
}

export interface StockAlert {
  product: string;
  currentStock: number;
  minimumStock: number;
}
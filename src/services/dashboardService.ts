import type {
  DashboardStats,
  SalesData,
  TopProduct,
  StockAlert,
} from "../types/dashboard";

export function getDashboardStats(): DashboardStats {
  return {
    salesToday: 4285.9,
    salesMonth: 68450.75,
    totalProducts: 86,
    lowStockProducts: 7,
  };
}

export function getSalesData(): SalesData[] {
  return [
    { date: "Seg", value: 8250 },
    { date: "Ter", value: 9120 },
    { date: "Qua", value: 7840 },
    { date: "Qui", value: 10350 },
    { date: "Sex", value: 11890 },
    { date: "Sáb", value: 15240 },
    { date: "Dom", value: 5760 },
  ];
}

export function getTopProducts(): TopProduct[] {
  return [
    {
      name: "Picanha Bovina",
      quantity: 42,
      revenue: 6298,
    },
    {
      name: "Contra Filé",
      quantity: 38,
      revenue: 4750,
    },
    {
      name: "Alcatra",
      quantity: 35,
      revenue: 3675,
    },
    {
      name: "Fraldinha",
      quantity: 31,
      revenue: 2480,
    },
    {
      name: "Linguiça Toscana",
      quantity: 56,
      revenue: 1960,
    },
  ];
}

export function getStockAlerts(): StockAlert[] {
  return [
    {
      product: "Picanha Bovina",
      currentStock: 4,
      minimumStock: 15,
    },
    {
      product: "Contra Filé",
      currentStock: 6,
      minimumStock: 12,
    },
    {
      product: "Linguiça Toscana",
      currentStock: 8,
      minimumStock: 20,
    },
    {
      product: "Coxa e Sobrecoxa",
      currentStock: 5,
      minimumStock: 15,
    },
    {
      product: "Carne Moída",
      currentStock: 7,
      minimumStock: 18,
    },
  ];
}
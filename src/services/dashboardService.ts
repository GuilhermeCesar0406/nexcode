import type { DashboardStats } from "../types/dashboard";

export function getDashboardStats(): DashboardStats {
  return {
    salesToday: 1250.5,
    salesMonth: 18750.75,
    totalProducts: 347,
    lowStockProducts: 8,
  };
}
import StatCard from "../../components/StatCard/StatCard";
import SalesChart from "../../components/SalesChart/SalesChart";
import TopProducts from "../../components/TopProducts/TopProducts";
import StockAlerts from "../../components/StockAlerts/StockAlerts";

import {
  getDashboardStats,
  getSalesData,
  getTopProducts,
  getStockAlerts,
} from "../../services/dashboardService";

import { formatCurrency } from "../../utils/formatCurrency";

function Dashboard() {
  const stats = getDashboardStats();
  const salesData = getSalesData();
  const topProducts = getTopProducts();
  const stockAlerts = getStockAlerts();

  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-full bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Cabeçalho */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard
            </h1>

            <p className="mt-1 text-gray-500 capitalize">
              {today}
            </p>
          </div>

          <div className="rounded-xl bg-white px-5 py-3 shadow-sm border border-gray-200">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Situação do açougue
            </p>

            <p className="mt-1 text-lg font-bold text-green-600">
              Operando normalmente
            </p>
          </div>
        </div>

        {/* Indicadores */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Vendas de hoje"
            value={formatCurrency(stats.salesToday)}
          />

          <StatCard
            title="Cortes cadastrados"
            value={stats.totalProducts.toString()}
          />

          <StatCard
            title="Estoque crítico"
            value={stats.lowStockProducts.toString()}
          />

          <StatCard
            title="Faturamento do mês"
            value={formatCurrency(stats.salesMonth)}
          />
        </div>

        {/* Gráfico */}
        <SalesChart data={salesData} />

        {/* Produtos + Alertas */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <TopProducts products={topProducts} />
          <StockAlerts alerts={stockAlerts} />
        </div>

        {/* Resumo operacional */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Resumo operacional
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Indicadores importantes do funcionamento do açougue.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <p className="text-xs uppercase text-gray-500">
                Pedidos
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-900">
                126
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <p className="text-xs uppercase text-gray-500">
                Ticket médio
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-900">
                R$ 87
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <p className="text-xs uppercase text-gray-500">
                Cortes bovinos
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-900">
                34
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <p className="text-xs uppercase text-gray-500">
                Produtos refrigerados
              </p>

              <p className="mt-2 text-2xl font-bold text-gray-900">
                52
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
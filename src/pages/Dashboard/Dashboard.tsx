import StatCard from "../../components/StatCard/StatCard";
import { getDashboardStats } from "../../services/dashboardService";
import { formatCurrency } from "../../utils/formatCurrency";

function Dashboard() {
  const stats = getDashboardStats();

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Visão geral do seu negócio
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Vendas hoje"
          value={formatCurrency(stats.salesToday)}
        />

        <StatCard
          title="Produtos"
          value={stats.totalProducts.toString()}
        />

        <StatCard
          title="Estoque baixo"
          value={stats.lowStockProducts.toString()}
        />

        <StatCard
          title="Vendas no mês"
          value={formatCurrency(stats.salesMonth)}
        />
      </div>
    </div>
  );
}

export default Dashboard;
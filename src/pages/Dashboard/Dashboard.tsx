import StatCard from "../../components/StatCard/StatCard";

function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Visão geral do seu negócio
        </p>
      </div>

      {/* Indicadores */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Vendas hoje"
          value="R$ 0,00"
        />

        <StatCard
          title="Produtos"
          value="0"
        />

        <StatCard
          title="Estoque baixo"
          value="0"
        />

        <StatCard
          title="Vendas no mês"
          value="R$ 0,00"
        />
      </div>
    </div>
  );
}

export default Dashboard;
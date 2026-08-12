import type { StockAlert } from "../../types/dashboard";

interface StockAlertsProps {
  alerts: StockAlert[];
}

function StockAlerts({ alerts }: StockAlertsProps) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Alertas de estoque
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Produtos que precisam de reposição.
        </p>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.product}
            className="flex items-center justify-between gap-4 rounded-lg bg-red-50 p-3"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-gray-900">
                {alert.product}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Mínimo recomendado: {alert.minimumStock} unidades
              </p>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-sm font-bold text-red-600">
                {alert.currentStock}
              </p>

              <p className="text-xs text-red-500">
                em estoque
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StockAlerts;
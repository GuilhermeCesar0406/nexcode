import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { SalesData } from "../../types/dashboard";

interface SalesChartProps {
  data: SalesData[];
}

function SalesChart({ data }: SalesChartProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Vendas por período
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Acompanhe o desempenho das vendas.
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip
  formatter={(value) => {
    if (typeof value !== "number") {
      return "";
    }

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }}
/>

            <Line
              type="monotone"
              dataKey="value"
              stroke="#9333ea"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesChart;
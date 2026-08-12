import type { TopProduct } from "../../types/dashboard";
import { formatCurrency } from "../../utils/formatCurrency";

interface TopProductsProps {
  products: TopProduct[];
}

function TopProducts({ products }: TopProductsProps) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Produtos mais vendidos
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Produtos com maior volume de vendas.
        </p>
      </div>

      <div className="space-y-4">
        {products.map((product, index) => (
          <div
            key={product.name}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-sm font-semibold text-purple-700">
                {index + 1}
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-gray-900">
                  {product.name}
                </p>

                <p className="text-xs text-gray-500">
                  {product.quantity} unidades
                </p>
              </div>
            </div>

            <span className="shrink-0 text-sm font-semibold text-gray-900">
              {formatCurrency(product.revenue)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopProducts;
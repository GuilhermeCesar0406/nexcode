import { useMemo, useState } from "react";

import { getProducts } from "../../services/productService";
import { formatCurrency } from "../../utils/formatCurrency";

function Products() {
  const products = getProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");

  const categories = [
    "Todas",
    "Bovinos",
    "Suínos",
    "Aves",
    "Embutidos",
    "Mercearia",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "Todas" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Cabeçalho */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Produtos
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Gerencie os produtos e o estoque do açougue.
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            + Novo produto
          </button>
        </div>

        {/* Filtros */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div>
              <label
                htmlFor="search"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Buscar produto
              </label>

              <input
                id="search"
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Digite o nome do produto..."
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Categoria
              </label>

              <select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Tabela */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[950px] text-left text-sm">

              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Produto
                  </th>

                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Categoria
                  </th>

                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Unidade
                  </th>

                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Preço
                  </th>

                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Estoque
                  </th>

                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Validade
                  </th>

                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Ações
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredProducts.map((product) => {
                  const isLowStock =
                    product.stock <= product.minimumStock;

                  return (
                    <tr
                      key={product.id}
                      className="transition hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">
                          {product.name}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {product.category}
                      </td>

                      <td className="px-6 py-4 font-medium uppercase text-gray-600">
                        {product.unit}
                      </td>

                      <td className="px-6 py-4 font-medium text-gray-900">
                        {formatCurrency(product.salePrice)} /{" "}
                        {product.unit}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={
                            isLowStock
                              ? "font-semibold text-red-600"
                              : "font-medium text-green-600"
                          }
                        >
                          {product.stock} {product.unit}
                        </span>

                        {isLowStock && (
                          <p className="mt-0.5 text-xs text-red-500">
                            Estoque baixo
                          </p>
                        )}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {product.expirationDate
                          ? new Date(
                              `${product.expirationDate}T00:00:00`,
                            ).toLocaleDateString("pt-BR")
                          : "Não se aplica"}
                      </td>

                      <td className="px-6 py-4">
                        <button
                          type="button"
                          className="font-medium text-purple-600 transition hover:text-purple-800"
                        >
                          Editar
                        </button>
                      </td>
                    </tr>
                  );
                })}

                {filteredProducts.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      Nenhum produto encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contador */}
        <div className="text-sm text-gray-500">
          Exibindo{" "}
          <span className="font-semibold text-gray-900">
            {filteredProducts.length}
          </span>{" "}
          de{" "}
          <span className="font-semibold text-gray-900">
            {products.length}
          </span>{" "}
          produtos.
        </div>

      </div>
    </div>
  );
}

export default Products;
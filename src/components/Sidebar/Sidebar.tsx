import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Produtos",
    path: "/produtos",
  },
  {
    label: "Compras",
    path: "/compras",
  },
  {
    label: "Estoque",
    path: "/estoque",
  },
  {
    label: "Fornecedores",
    path: "/fornecedores",
  },
  {
    label: "Perdas",
    path: "/perdas",
  },
  {
    label: "Relatórios",
    path: "/relatorios",
  },
];

function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-4">
      <nav>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
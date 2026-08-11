function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600 font-bold text-white">
          N
        </div>

        <span className="text-lg font-semibold text-gray-900">
          NexCode
        </span>
      </div>

      {/* Área do usuário */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          aria-label="Notificações"
        >
          🔔
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 font-semibold text-purple-700">
            G
          </div>

          <div className="hidden text-sm sm:block">
            <p className="font-medium text-gray-900">Guilherme</p>
            <p className="text-xs text-gray-500">Administrador</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
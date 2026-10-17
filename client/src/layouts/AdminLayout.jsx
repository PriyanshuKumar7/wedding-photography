/* Admin Layout - Sidebar & Topbar (For future backend) */
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-lux-dark text-lux-cream">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-full z-50
          w-64 bg-lux-black p-6 border-r border-white/10
          transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-serif text-lux-gold">Admin Panel</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-lux-gold p-1"
            aria-label="Close sidebar"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="space-y-4 text-sm sm:text-base">
          <Link
            to="/admin"
            onClick={() => setSidebarOpen(false)}
            className="block hover:text-lux-gold transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/"
            onClick={() => setSidebarOpen(false)}
            className="block hover:text-lux-gold transition-colors"
          >
            View Site
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile topbar */}
        <header className="md:hidden flex items-center gap-3 px-4 py-3 bg-lux-black border-b border-white/10">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-lux-gold p-1"
            aria-label="Open sidebar"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-lg font-serif text-lux-gold">Admin Panel</h1>
        </header>

        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../services/authService";

const Sidebar = ({ isOpen = false, onClose = () => {} }) => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "▦",
    },
    {
      name: "Projects",
      path: "/dashboard/projects",
      icon: "▣",
    },
    {
      name: "Clients",
      path: "/dashboard/clients",
      icon: "♙",
    },
    {
      name: "Employees",
      path: "/dashboard/employees",
      icon: "♟",
    },
    {
      name: "Tasks",
      path: "/dashboard/tasks",
      icon: "✓",
    },
    {
      name: "Documents",
      path: "/dashboard/documents",
      icon: "▤",
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: "⚙",
    },
  ];

  const handleLogout = () => {
    logoutUser();
    window.location.href = "/login";
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs md:hidden"
        />
      )}

      {/* Sidebar Aside */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-200 bg-white transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Header */}
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
          <h1 className="text-2xl font-black tracking-tight text-slate-900">
            Construct
            <span className="text-orange-500">Pro</span>
          </h1>

          {/* Close button for mobile */}
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 md:hidden"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="h-[calc(100vh-160px)] overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Main Menu
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/dashboard"}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-orange-500 text-white shadow-sm"
                      : "text-slate-600 hover:bg-orange-50 hover:text-orange-500"
                  }`
                }
              >
                <span className="w-5 text-center text-base">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-white p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            <span className="w-5 text-center">↪</span>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
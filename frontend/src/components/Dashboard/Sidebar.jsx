import { NavLink } from "react-router-dom";
import { logoutUser } from "../../services/authService";

const Sidebar = () => {
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
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-slate-200 bg-white md:block">

      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-200 px-6">
        <h1 className="text-2xl font-black tracking-tight text-slate-900">
          Construct
          <span className="text-orange-500">Pro</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-6">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Main Menu
        </p>

        <div className="space-y-1">

          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/dashboard"}
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
      <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 p-4">

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          <span className="w-5 text-center">↪</span>
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;
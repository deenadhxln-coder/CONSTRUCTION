import { getCurrentUser } from "../../services/authService";

const Topbar = ({ onToggleSidebar = () => {} }) => {
  const user = getCurrentUser();
  const userName = user?.name || "User";

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-6 backdrop-blur-md lg:px-8">
      {/* Mobile Menu & Logo */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
          aria-label="Open navigation menu"
        >
          ☰
        </button>

        <h1 className="text-xl font-black text-slate-900">
          Construct
          <span className="text-orange-500">Pro</span>
        </h1>
      </div>

      {/* Desktop Breadcrumb / Title */}
      <div className="hidden md:block">
        <p className="text-sm font-medium text-slate-500">
          Construction Management Dashboard
        </p>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-5">
        {/* Notification */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-lg transition hover:bg-orange-50"
          aria-label="Notifications"
        >
          🔔
          <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-orange-500 ring-2 ring-white" />
        </button>

        {/* User Info */}
        <div className="flex items-center gap-3 border-l border-slate-200 pl-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
            {userName.charAt(0).toUpperCase()}
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">
              {userName}
            </p>
            <p className="text-xs text-slate-500">
              Project Manager
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
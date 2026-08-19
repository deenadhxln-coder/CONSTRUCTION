import { getCurrentUser } from "../../services/authService";

const Topbar = () => {
  const user = getCurrentUser();

  const userName = user?.name || "User";

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-8">

      {/* Mobile Logo */}
      <div className="md:hidden">
        <h1 className="text-xl font-black text-slate-900">
          Construct
          <span className="text-orange-500">Pro</span>
        </h1>
      </div>

      {/* Desktop Spacer */}
      <div className="hidden md:block">
        <p className="text-sm text-slate-500">
          Construction Management System
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-lg transition hover:bg-orange-50"
          aria-label="Notifications"
        >
          🔔

          <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
        </button>

        {/* User */}
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
import {
  Home,
  Pizza,
  Package,
  User,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const CustomerSidebar = ({ isOpen, onClose }) => {
  const navigationItems = [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: Home,
      end: true,
    },
    {
      label: "Order Pizza",
      to: "/order-pizza",
      icon: Pizza,
    },
    {
      label: "My Orders",
      to: "/orders",
      icon: Package,
    },
  ];

  const accountItems = [
    {
      label: "Profile",
      to: "/profile",
      icon: User,
    },
    {
      label: "Settings",
      to: "/settings",
      icon: Settings,
    },
  ];

  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
      isActive
        ? "bg-[#27245B] text-white shadow-sm"
        : "text-slate-500 hover:bg-slate-50 hover:text-[#27245B]"
    }`;

  return (
    <>
      {/* Mobile backdrop */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close navigation menu"
        className={`fixed inset-0 z-40 bg-slate-950/40 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-100 bg-white shadow-xl transition-transform duration-300 md:z-40 md:w-64 md:translate-x-0 md:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo / Mobile close button */}
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <Link to="/dashboard" onClick={onClose} className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]">
              <Pizza
                size={21}
                className="text-white"
                strokeWidth={2.2}
              />
            </div>

            <span className="text-xl font-extrabold tracking-tight text-[#27245B]">
              Pizzy
            </span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-[#27245B] md:hidden"
            aria-label="Close navigation menu"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div>
            <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Menu
            </p>

            <div className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    onClick={onClose}
                    className={navLinkStyles}
                  >
                    <Icon size={19} strokeWidth={2} />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Account
            </p>

            <div className="space-y-1">
              {accountItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={onClose}
                    className={navLinkStyles}
                  >
                    <Icon size={19} strokeWidth={2} />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Logout */}
        <div className="border-t border-slate-100 p-4">
          <button
            type="button"
            onClick={onClose}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            <LogOut size={19} strokeWidth={2} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default CustomerSidebar;
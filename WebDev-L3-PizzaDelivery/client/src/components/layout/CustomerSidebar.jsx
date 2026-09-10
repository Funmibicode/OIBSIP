import {
  Home,
  Pizza,
  Package,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const CustomerSidebar = () => {
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
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-100 bg-white md:flex md:flex-col">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-100 px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]">
            <Pizza size={21} className="text-white" strokeWidth={2.2} />
          </div>

          <span className="text-xl font-extrabold tracking-tight text-[#27245B]">
            Pizzy
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        {/* Main Navigation */}
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
                  className={navLinkStyles}
                >
                  <Icon size={19} strokeWidth={2} />

                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Account Navigation */}
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
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          <LogOut size={19} strokeWidth={2} />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default CustomerSidebar;
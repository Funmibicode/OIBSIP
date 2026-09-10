import {
  BarChart3,
  ClipboardList,
  Package,
  LogOut,
  Pizza,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const navigationItems = [
    {
      label: "Overview",
      to: "/admin/dashboard",
      icon: BarChart3,
      end: true,
    },
    {
      label: "Orders",
      to: "/admin/dashboard?section=orders",
      icon: ClipboardList,
    },
    {
      label: "Inventory",
      to: "/admin/dashboard?section=inventory",
      icon: Package,
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
        <Link to="/admin/dashboard" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]">
            <Pizza
              size={21}
              className="text-white"
              strokeWidth={2.2}
            />
          </div>

          <div>
            <span className="block text-xl font-extrabold tracking-tight text-[#27245B]">
              Pizzy
            </span>

            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Admin Panel
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
          Management
        </p>

        <div className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
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
      </nav>

      {/* Admin Account / Logout */}
      <div className="border-t border-slate-100 p-4">
        <div className="mb-3 rounded-xl bg-[#F8F9FF] px-3 py-3">
          <p className="text-xs font-medium text-slate-400">
            Signed in as
          </p>

          <p className="mt-1 truncate text-sm font-semibold text-[#172033]">
            Administrator
          </p>
        </div>

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

export default AdminSidebar;
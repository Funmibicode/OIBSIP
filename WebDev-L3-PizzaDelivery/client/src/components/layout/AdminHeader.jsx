import {
  Bell,
  ChevronDown,
  Menu,
  Pizza,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminHeader = ({ onMenuClick }) => {
  return (
    <header className="border-b border-slate-100 bg-white">
      {/* Mobile Header */}
      <div className="md:hidden">
        {/* Top Row */}
        <div className="flex h-16 items-center justify-between border-b border-slate-100 px-5">
          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label="Go to homepage"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]">
              <Pizza
                size={21}
                className="text-white"
                strokeWidth={2.2}
              />
            </div>

            <div>
              <span className="block text-lg font-extrabold tracking-tight text-[#27245B]">
                Pizzy
              </span>

              <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Admin Panel
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-50 hover:text-[#27245B]"
            aria-label="Open navigation menu"
          >
            <Menu size={21} strokeWidth={2} />
          </button>
        </div>

        {/* Administration Row */}
        <div className="flex min-h-20 items-center justify-between gap-4 px-5 py-3">
          <div>
            <p className="text-sm text-slate-500">
              Administration
            </p>

            <h1 className="mt-0.5 text-lg font-bold text-[#172033]">
              Manage your pizza business
            </h1>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-[#27245B]"
              aria-label="Admin notifications"
            >
              <Bell size={19} strokeWidth={2} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-yellow-400 ring-2 ring-white" />
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#27245B]/10 text-[#27245B] transition hover:bg-[#27245B]/15"
              aria-label="Open admin profile"
            >
              <ShieldCheck size={19} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden min-h-20 items-center justify-between gap-4 px-5 md:flex lg:px-8">
        <div>
          <p className="text-sm text-slate-500">
            Administration
          </p>

          <h1 className="mt-0.5 text-lg font-bold text-[#172033]">
            Manage your pizza business
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-[#27245B]"
            aria-label="Admin notifications"
          >
            <Bell size={19} strokeWidth={2} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-yellow-400 ring-2 ring-white" />
          </button>

          <div className="hidden h-8 w-px bg-slate-200 sm:block" />

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-slate-50"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#27245B]/10 text-[#27245B]">
              <ShieldCheck size={19} strokeWidth={2} />
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-[#172033]">
                Administrator
              </p>

              <p className="text-xs text-slate-400">
                Admin
              </p>
            </div>

            <ChevronDown
              size={16}
              className="hidden text-slate-400 sm:block"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
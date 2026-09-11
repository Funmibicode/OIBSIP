import {
  Bell,
  ChevronDown,
  Menu,
  Pizza,
  UserCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const CustomerHeader = ({ onMenuClick }) => {
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

            <span className="text-lg font-extrabold tracking-tight text-[#27245B]">
              Pizzy
            </span>
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

        {/* Greeting Row */}
        <div className="flex min-h-20 items-center justify-between gap-4 px-5 py-3">
          <div>
            <p className="text-sm text-slate-500">
              Welcome back
            </p>

            <h1 className="mt-0.5 text-lg font-bold text-[#172033]">
              Ready for some pizza?
            </h1>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-[#27245B]"
              aria-label="Notifications"
            >
              <Bell size={19} strokeWidth={2} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-yellow-400 ring-2 ring-white" />
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#27245B] transition hover:bg-slate-50"
              aria-label="Open profile"
            >
              <UserCircle size={34} strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden min-h-20 items-center justify-between gap-4 px-5 md:flex lg:px-8">
        <div>
          <p className="text-sm text-slate-500">
            Welcome back
          </p>

          <h1 className="mt-0.5 text-lg font-bold text-[#172033]">
            Ready for some pizza?
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-[#27245B]"
            aria-label="Notifications"
          >
            <Bell size={19} strokeWidth={2} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-yellow-400 ring-2 ring-white" />
          </button>

          <div className="hidden h-8 w-px bg-slate-200 sm:block" />

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-slate-50"
          >
            <UserCircle
              size={34}
              strokeWidth={1.7}
              className="text-[#27245B]"
            />

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-[#172033]">
                John Doe
              </p>

              <p className="text-xs text-slate-400">
                Customer
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

export default CustomerHeader;
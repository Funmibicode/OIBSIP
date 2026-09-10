import { Bell, ChevronDown, ShieldCheck } from "lucide-react";

const AdminHeader = () => {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="flex min-h-20 items-center justify-between gap-4 px-5 lg:px-8">
        {/* Page Heading */}
        <div>
          <p className="text-sm text-slate-500">
            Administration
          </p>

          <h1 className="mt-0.5 text-lg font-bold text-[#172033]">
            Manage your pizza business
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-[#27245B]"
            aria-label="Admin notifications"
          >
            <Bell size={19} strokeWidth={2} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-yellow-400 ring-2 ring-white" />
          </button>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-slate-200 sm:block" />

          {/* Admin Profile */}
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
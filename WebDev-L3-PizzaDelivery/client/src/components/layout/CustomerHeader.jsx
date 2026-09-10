import { Bell, ChevronDown, UserCircle } from "lucide-react";

const CustomerHeader = () => {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="flex min-h-20 items-center justify-between gap-4 px-5 lg:px-8">
        {/* Greeting */}
        <div>
          <p className="text-sm text-slate-500">
            Welcome back 👋
          </p>

          <h1 className="mt-0.5 text-lg font-bold text-[#172033]">
            Ready for some pizza?
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-[#27245B]"
            aria-label="Notifications"
          >
            <Bell size={19} strokeWidth={2} />

            {/* Notification Indicator */}
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-yellow-400 ring-2 ring-white" />
          </button>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-slate-200 sm:block" />

          {/* User */}
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
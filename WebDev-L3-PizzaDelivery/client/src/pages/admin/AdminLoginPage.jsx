import { Link } from 'react-router-dom';
import { ShieldCheck } from "lucide-react";
import LoginForm from "../../components/auth/LoginForm";

const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <div className="flex min-h-screen items-center justify-center px-5 py-10">
        <div className="w-full max-w-md">
          {/* Brand */}
          <div className="mb-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#27245B]">
                <ShieldCheck
                  size={22}
                  className="text-white"
                  strokeWidth={2.2}
                />
              </div>

              <span className="text-2xl font-extrabold tracking-tight text-[#27245B]">
                Pizzy
              </span>
            </Link>
          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-7">
              <p className="mb-2 text-sm font-semibold text-[#27245B]">
                Admin Portal
              </p>

              <h1 className="text-2xl font-extrabold text-[#172033]">
                Welcome back
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Sign in to manage orders, inventory, and your pizza
                business.
              </p>
            </div>

            <LoginForm isAdmin />
          </div>

          {/* Back to Customer Login */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm font-medium text-slate-500 transition hover:text-[#27245B]"
            >
              ← Back to customer login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
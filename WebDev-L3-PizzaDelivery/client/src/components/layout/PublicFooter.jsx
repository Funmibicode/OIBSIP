import { Link } from 'react-router-dom';

const PublicFooter = () => {
  return (
    <footer className="bg-[#27245B] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-xl">
                🍕
              </div>

              <span className="text-xl font-extrabold tracking-tight">
                Pizzy
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-indigo-200">
              Delicious pizza, made your way and delivered straight to your
              doorstep.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-yellow-400 hover:text-slate-950"
              >
                f
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-yellow-400 hover:text-slate-950"
              >
                ig
              </a>

              <a
                href="#twitter"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-yellow-400 hover:text-slate-950"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-indigo-200 transition hover:text-yellow-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  href="#menu"
                  className="text-sm text-indigo-200 transition hover:text-yellow-400"
                >
                  Our Menu
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-indigo-200 transition hover:text-yellow-400"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-indigo-200 transition hover:text-yellow-400"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Account
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/login"
                  className="text-sm text-indigo-200 transition hover:text-yellow-400"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="text-sm text-indigo-200 transition hover:text-yellow-400"
                >
                  Create Account
                </Link>
              </li>

              <li>
                <Link
                  to="/forgot-password"
                  className="text-sm text-indigo-200 transition hover:text-yellow-400"
                >
                  Forgot Password
                </Link>
              </li>

              <li>
                <Link
                  to="/orders"
                  className="text-sm text-indigo-200 transition hover:text-yellow-400"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <span className="text-yellow-400">📍</span>
                <span className="text-sm leading-5 text-indigo-200">
                  Lagos, Nigeria
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-400">📞</span>
                <a
                  href="tel:+2348000000000"
                  className="text-sm text-indigo-200 transition hover:text-yellow-400"
                >
                  +234 800 000 0000
                </a>
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-400">✉️</span>
                <a
                  href="mailto:hello@pizzy.com"
                  className="text-sm text-indigo-200 transition hover:text-yellow-400"
                >
                  hello@pizzy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-3 text-center text-sm text-indigo-300 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Pizzy. All rights reserved.
          </p>

          <div className="flex justify-center gap-5 sm:justify-end">
            <a
              href="#privacy"
              className="transition hover:text-yellow-400"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="transition hover:text-yellow-400"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
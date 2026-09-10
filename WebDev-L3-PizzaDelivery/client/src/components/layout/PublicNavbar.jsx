import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PublicNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative w-full bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B] text-xl">
            🍕
          </div>

          <span className="text-xl font-extrabold tracking-tight text-[#27245B]">
            Pizzy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-[#27245B] transition hover:text-yellow-500"
          >
            Home
          </Link>

          <a
            href="#menu"
            className="text-sm font-medium text-slate-500 transition hover:text-[#27245B]"
          >
            Menu
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-500 transition hover:text-[#27245B]"
          >
            How It Works
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-500 transition hover:text-[#27245B]"
          >
            Contact
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="text-sm font-semibold text-[#27245B] transition hover:text-yellow-500"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-yellow-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-2xl text-[#27245B] transition hover:bg-slate-100 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full z-50 border-t border-slate-100 bg-white px-5 pb-6 pt-4 shadow-lg md:hidden"
        >
          <div className="flex flex-col">
            <Link
              to="/"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-[#27245B]"
            >
              Home
            </Link>

            <a
              href="#menu"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-sm font-medium text-slate-600"
            >
              Menu
            </a>

            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-sm font-medium text-slate-600"
            >
              How It Works
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-sm font-medium text-slate-600"
            >
              Contact
            </a>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/login"
                onClick={closeMenu}
                className="rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-[#27245B] transition hover:bg-slate-50"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="rounded-xl bg-yellow-400 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default PublicNavbar;
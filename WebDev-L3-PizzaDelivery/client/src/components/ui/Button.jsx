import React from 'react'


const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-yellow-400 text-slate-950 hover:bg-yellow-300 focus:ring-yellow-400",

    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 focus:ring-slate-400",

    dark:
      "bg-[#27245B] text-white hover:bg-[#332F70] focus:ring-[#27245B]",

    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",

    ghost:
      "bg-transparent text-[#27245B] hover:bg-slate-100 focus:ring-slate-300",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
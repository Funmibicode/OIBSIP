const Input = ({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error = "",
  disabled = false,
  required = false,
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-medium text-[#172033]"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#172033] outline-none transition-all duration-200 placeholder:text-slate-400
          ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-slate-200 focus:border-[#27245B] focus:ring-2 focus:ring-[#27245B]/10"
          }
          disabled:cursor-not-allowed disabled:bg-slate-100
        `}
      />

      {error && (
        <p className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
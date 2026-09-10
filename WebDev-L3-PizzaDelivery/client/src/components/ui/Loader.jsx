const Loader = ({
  message = "Loading...",
  size = "lg",
}) => {
  const sizes = {
    sm: "h-6 w-6 border-2",
    md: "h-10 w-10 border-4",
    lg: "h-14 w-14 border-4",
  };

  return (
    <div className="flex min-h-[250px] flex-col items-center justify-center">
      <div
        className={`animate-spin rounded-full border-slate-200 border-t-[#27245B] ${sizes[size]}`}
        role="status"
        aria-label={message}
      />

      {message && (
        <p className="mt-4 text-sm font-medium text-slate-500">
          {message}
        </p>
      )}
    </div>
  );
};

export default Loader;
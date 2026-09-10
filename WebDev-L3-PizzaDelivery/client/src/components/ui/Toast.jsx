const Toast = ({
  message,
  type = "success",
  onClose,
}) => {
  const types = {
    success: {
      container: "border-green-200 bg-green-50 text-green-700",
      icon: "✓",
    },

    error: {
      container: "border-red-200 bg-red-50 text-red-700",
      icon: "!",
    },

    warning: {
      container: "border-yellow-200 bg-yellow-50 text-yellow-700",
      icon: "!",
    },

    info: {
      container: "border-blue-200 bg-blue-50 text-blue-700",
      icon: "i",
    },
  };

  const currentType = types[type] || types.success;

  return (
    <div
      className={`flex w-full max-w-sm items-center gap-3 rounded-xl border px-4 py-3 shadow-lg ${currentType.container}`}
      role="alert"
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold">
        {currentType.icon}
      </span>

      <p className="flex-1 text-sm font-medium">
        {message}
      </p>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="text-lg opacity-60 transition hover:opacity-100"
          aria-label="Close notification"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Toast;
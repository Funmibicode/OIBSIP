const ErrorState = ({
  title = "Something went wrong",
  description = "We couldn't load this content. Please try again.",
  onRetry = null,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-red-100 bg-white px-6 py-12 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-2xl">
        ⚠️
      </div>

      <h3 className="mb-2 text-lg font-bold text-[#172033]">
        {title}
      </h3>

      <p className="mb-5 max-w-md text-sm leading-6 text-slate-500">
        {description}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-xl bg-[#27245B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#332F70]"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
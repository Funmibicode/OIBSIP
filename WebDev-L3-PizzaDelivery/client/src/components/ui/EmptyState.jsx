const EmptyState = ({
  title = "Nothing here yet",
  description = "",
  action = null,
  icon = "📦",
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#27245B]/5 text-2xl">
        {icon}
      </div>

      <h3 className="mb-2 text-lg font-bold text-[#172033]">
        {title}
      </h3>

      {description && (
        <p className="mb-5 max-w-md text-sm leading-6 text-slate-500">
          {description}
        </p>
      )}

      {action && <div>{action}</div>}
    </div>
  );
};

export default EmptyState;
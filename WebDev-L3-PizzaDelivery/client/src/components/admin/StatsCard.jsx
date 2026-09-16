import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const StatsCard = ({
  title,
  value,
  description = "",
  trend = null,
  trendType = "up",
  icon: Icon,
}) => {
  const isPositive = trendType === "up";

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      {/* Top Section */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-2xl font-extrabold tracking-tight text-[#172033]">
            {value}
          </p>
        </div>

        {/* Icon */}
        {Icon && (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#27245B]/10 text-[#27245B]">
            <Icon size={21} strokeWidth={2} />
          </div>
        )}
      </div>

      {/* Bottom Section */}
      {(trend || description) && (
        <div className="mt-4 flex items-center gap-2">
          {trend && (
            <span
              className={`inline-flex items-center gap-1 text-xs font-bold ${
                isPositive ? "text-green-600" : "text-red-500"
              }`}
            >
              {isPositive ? (
                <ArrowUpRight size={14} strokeWidth={2.5} />
              ) : (
                <ArrowDownRight size={14} strokeWidth={2.5} />
              )}

              {trend}
            </span>
          )}

          {description && (
            <span className="text-xs text-slate-400">
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default StatsCard;
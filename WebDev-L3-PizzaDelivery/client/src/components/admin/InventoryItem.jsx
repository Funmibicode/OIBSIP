import { Edit3, Package } from "lucide-react";
import Badge from "../ui/Badge";

const InventoryItem = ({
  item,
  onUpdate,
}) => {
  const getStockStatus = () => {
    if (item.quantity <= 0) {
      return {
        label: "Out of Stock",
        variant: "danger",
      };
    }

    if (item.quantity <= item.threshold) {
      return {
        label: "Low Stock",
        variant: "warning",
      };
    }

    return {
      label: "In Stock",
      variant: "success",
    };
  };

  const status = getStockStatus();

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#27245B]/10 text-[#27245B]">
            <Package size={20} strokeWidth={2} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#172033]">
              {item.name}
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              {item.category}
            </p>
          </div>
        </div>

        <Badge variant={status.variant}>
          {status.label}
        </Badge>
      </div>

      {/* Stock Information */}
      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-xs text-slate-400">
            Current Stock
          </p>

          <p className="mt-1 text-lg font-bold text-[#172033]">
            {item.quantity}
            <span className="ml-1 text-xs font-medium text-slate-400">
              {item.unit}
            </span>
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-xs text-slate-400">
            Threshold
          </p>

          <p className="mt-1 text-lg font-bold text-[#172033]">
            {item.threshold}
            <span className="ml-1 text-xs font-medium text-slate-400">
              {item.unit}
            </span>
          </p>
        </div>
      </div>

      {/* Update Button */}
      <button
        type="button"
        onClick={() => onUpdate?.(item)}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-[#27245B] transition hover:bg-[#27245B] hover:text-white"
      >
        <Edit3 size={16} strokeWidth={2} />
        Update Stock
      </button>
    </div>
  );
};

export default InventoryItem;
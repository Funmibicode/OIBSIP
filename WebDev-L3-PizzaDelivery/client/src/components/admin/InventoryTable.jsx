import { Package, Plus } from "lucide-react";
import Badge from "../ui/Badge";

const InventoryTable = ({ inventory = [], onUpdateStock }) => {
  const getStockStatus = (item) => {
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

  if (inventory.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white px-6 py-12 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#27245B]/5 text-[#27245B]">
          <Package size={24} />
        </div>

        <h3 className="mt-4 text-base font-bold text-[#172033]">
          No inventory items
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Your inventory is currently empty.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-bold text-[#172033]">
            Inventory
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Monitor ingredients and stock levels
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Package size={15} />

          <span>{inventory.length} items</span>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70">
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Ingredient
              </th>

              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Category
              </th>

              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Current Stock
              </th>

              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Threshold
              </th>

              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Status
              </th>

              <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wider text-slate-400">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((item) => {
              const status = getStockStatus(item);

              return (
                <tr
                  key={item.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
                >
                  {/* Ingredient */}
                  <td className="px-5 py-4">
                    <p className="text-sm font-semibold text-[#172033]">
                      {item.name}
                    </p>
                  </td>

                  {/* Category */}
                  <td className="px-5 py-4">
                    <span className="text-sm text-slate-500">
                      {item.category}
                    </span>
                  </td>

                  {/* Current Stock */}
                  <td className="px-5 py-4">
                    <span className="text-sm font-bold text-[#172033]">
                      {item.quantity} {item.unit}
                    </span>
                  </td>

                  {/* Threshold */}
                  <td className="px-5 py-4">
                    <span className="text-sm text-slate-500">
                      {item.threshold} {item.unit}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <Badge variant={status.variant}>
                      {status.label}
                    </Badge>
                  </td>

                  {/* Action */}
                  <td className="px-5 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => onUpdateStock?.(item)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-[#27245B] transition hover:bg-[#27245B] hover:text-white"
                    >
                      <Plus size={14} strokeWidth={2.2} />
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Inventory */}
      <div className="divide-y divide-slate-100 md:hidden">
        {inventory.map((item) => {
          const status = getStockStatus(item);

          return (
            <div key={item.id} className="p-5">
              {/* Item Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-[#172033]">
                    {item.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {item.category}
                  </p>
                </div>

                <Badge variant={status.variant}>
                  {status.label}
                </Badge>
              </div>

              {/* Stock Information */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-400">
                    Current Stock
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#172033]">
                    {item.quantity} {item.unit}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Threshold
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    {item.threshold} {item.unit}
                  </p>
                </div>
              </div>

              {/* Update Button */}
              <button
                type="button"
                onClick={() => onUpdateStock?.(item)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-[#27245B] transition hover:bg-slate-50"
              >
                <Plus size={17} strokeWidth={2.2} />
                Update Stock
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InventoryTable;
import { AlertTriangle } from "lucide-react";

const LowStockBadge = ({
  quantity,
  threshold,
}) => {
  const isOutOfStock = quantity <= 0;
  const isLowStock = quantity > 0 && quantity <= threshold;

  if (!isOutOfStock && !isLowStock) {
    return null;
  }

  const label = isOutOfStock
    ? "Out of Stock"
    : "Low Stock";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${
        isOutOfStock
          ? "bg-red-50 text-red-600"
          : "bg-yellow-50 text-yellow-700"
      }`}
    >
      <AlertTriangle size={14} strokeWidth={2.2} />
      {label}
    </span>
  );
};

export default LowStockBadge;
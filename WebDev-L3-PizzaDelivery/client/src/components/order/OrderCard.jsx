import {
  CalendarDays,
  ChevronRight,
  Package,
} from "lucide-react";
import Badge from "../ui/Badge";

const OrderCard = ({ order, onViewOrder }) => {
  const statusVariants = {
    "Order Received": "info",
    "In Kitchen": "warning",
    "Sent to Delivery": "purple",
    Delivered: "success",
    Cancelled: "danger",
  };

  const statusVariant =
    statusVariants[order.status] || "default";

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Top Section */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400">
            Order
          </p>

          <h3 className="mt-1 text-base font-bold text-[#172033]">
            #{order.orderNumber}
          </h3>
        </div>

        <Badge variant={statusVariant}>
          {order.status}
        </Badge>
      </div>

      {/* Order Info */}
      <div className="mt-5 rounded-xl bg-[#F8F9FF] p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#27245B]/10 text-[#27245B]">
            <Package size={21} strokeWidth={2} />
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="truncate text-sm font-bold text-[#172033]">
              {order.items[0]?.name}
            </h4>

            <p className="mt-1 text-xs text-slate-500">
              {order.items.length}{" "}
              {order.items.length === 1 ? "item" : "items"}
            </p>
          </div>

          <p className="text-sm font-bold text-[#172033]">
            ₦{order.total.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <CalendarDays size={15} strokeWidth={2} />

          <span>{order.createdAt}</span>
        </div>

        <button
          type="button"
          onClick={() => onViewOrder?.(order)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#27245B] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#332F70]"
        >
          View Order
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
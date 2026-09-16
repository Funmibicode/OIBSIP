import { CalendarDays, CreditCard, Hash } from "lucide-react";
import OrderStatus from "./OrderStatus";
import OrderTimeline from "./OrderTimeline";
import OrderSummary from "./OrderSummary";

const OrderDetails = ({ order }) => {
  if (!order) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center">
        <h3 className="text-lg font-bold text-[#172033]">
          Order not found
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          We couldn't find the order you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Order Header */}
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">
              Order Details
            </p>

            <h1 className="mt-1 text-xl font-extrabold text-[#172033]">
              #{order.orderNumber}
            </h1>
          </div>

          <OrderStatus status={order.status} />
        </div>

        {/* Order Metadata */}
        <div className="mt-6 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F8F9FF] text-[#27245B]">
              <CalendarDays size={18} strokeWidth={2} />
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                Date
              </p>

              <p className="mt-0.5 text-sm font-semibold text-[#172033]">
                {order.createdAt}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F8F9FF] text-[#27245B]">
              <CreditCard size={18} strokeWidth={2} />
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                Payment
              </p>

              <p className="mt-0.5 text-sm font-semibold text-[#172033]">
                {order.paymentStatus}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F8F9FF] text-[#27245B]">
              <Hash size={18} strokeWidth={2} />
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                Payment Method
              </p>

              <p className="mt-0.5 text-sm font-semibold text-[#172033]">
                {order.paymentMethod}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main */}
        <div className="space-y-6 lg:col-span-2">
          <OrderTimeline status={order.status} />
        </div>

        {/* Sidebar */}
        <div>
          <OrderSummary order={order} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
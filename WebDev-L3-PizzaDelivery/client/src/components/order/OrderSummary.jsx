import { ReceiptText } from "lucide-react";

const OrderSummary = ({ order }) => {
  const formatCurrency = (amount) => {
    return `₦${amount.toLocaleString()}`;
  };

  const subtotal = order.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]/10 text-[#27245B]">
          <ReceiptText size={20} strokeWidth={2} />
        </div>

        <div>
          <h2 className="text-base font-bold text-[#172033]">
            Order Summary
          </h2>

          <p className="text-xs text-slate-500">
            {order.items.length}{" "}
            {order.items.length === 1 ? "item" : "items"}
          </p>
        </div>
      </div>

      {/* Items */}
      <div className="mt-6 space-y-4">
        {order.items.map((item) => {
          const itemTotal = item.price * item.quantity;

          return (
            <div
              key={item.id}
              className="flex items-start justify-between gap-4"
            >
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-[#172033]">
                  {item.name}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {item.size} × {item.quantity}
                </p>
              </div>

              <p className="shrink-0 text-sm font-semibold text-[#172033]">
                {formatCurrency(itemTotal)}
              </p>
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-slate-100" />

      {/* Subtotal */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-500">Subtotal</span>

        <span className="font-semibold text-[#172033]">
          {formatCurrency(subtotal)}
        </span>
      </div>

      {/* Delivery */}
      {order.deliveryFee !== undefined && (
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-slate-500">Delivery Fee</span>

          <span className="font-semibold text-[#172033]">
            {formatCurrency(order.deliveryFee)}
          </span>
        </div>
      )}

      {/* Total */}
      <div className="mt-5 rounded-xl bg-[#F8F9FF] p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-[#172033]">
            Total
          </span>

          <span className="text-lg font-extrabold text-[#27245B]">
            {formatCurrency(order.total)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
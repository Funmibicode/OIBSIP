import { Eye, Package } from "lucide-react";
import { Link } from 'react-router-dom';
import Badge from "../ui/Badge";

const AdminOrderTable = ({ orders = [] }) => {
  const getStatusVariant = (status) => {
    const variants = {
      "Order Received": "info",
      "In Kitchen": "warning",
      "Sent to Delivery": "purple",
      Delivered: "success",
      Cancelled: "danger",
    };

    return variants[status] || "default";
  };

  const getPaymentVariant = (status) => {
    const variants = {
      Paid: "success",
      Pending: "warning",
      Refunded: "danger",
      Failed: "danger",
    };

    return variants[status] || "default";
  };

  if (!orders.length) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
        <Package
          size={36}
          className="mx-auto text-slate-300"
          strokeWidth={1.8}
        />

        <h3 className="mt-4 text-base font-bold text-[#172033]">
          No orders found
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          There are no orders to display right now.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      {/* Desktop Table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70">
              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Order
              </th>

              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Items
              </th>

              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Total
              </th>

              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Payment
              </th>

              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Status
              </th>

              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
              >
                {/* Order */}
                <td className="px-5 py-4">
                  <div>
                    <p className="text-sm font-bold text-[#172033]">
                      {order.orderNumber}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {order.createdAt}
                    </p>
                  </div>
                </td>

                {/* Items */}
                <td className="px-5 py-4">
                  <div>
                    <p className="text-sm font-semibold text-[#172033]">
                      {order.items.length}{" "}
                      {order.items.length === 1 ? "item" : "items"}
                    </p>

                    <p className="mt-1 max-w-[180px] truncate text-xs text-slate-400">
                      {order.items
                        .map((item) => `${item.quantity}x ${item.name}`)
                        .join(", ")}
                    </p>
                  </div>
                </td>

                {/* Total */}
                <td className="px-5 py-4">
                  <p className="text-sm font-bold text-[#172033]">
                    ₦{order.total.toLocaleString()}
                  </p>
                </td>

                {/* Payment */}
                <td className="px-5 py-4">
                  <div>
                    <Badge variant={getPaymentVariant(order.paymentStatus)}>
                      {order.paymentStatus}
                    </Badge>

                    <p className="mt-1 text-xs text-slate-400">
                      {order.paymentMethod}
                    </p>
                  </div>
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <Badge variant={getStatusVariant(order.status)}>
                    {order.status}
                  </Badge>
                </td>

                {/* Action */}
                <td className="px-5 py-4">
                  <Link
                    to={`/orders/${order.id}`}
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-[#27245B] transition hover:bg-[#27245B]/10"
                  >
                    <Eye size={15} strokeWidth={2} />
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="divide-y divide-slate-100 md:hidden">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-5"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-[#172033]">
                  {order.orderNumber}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {order.createdAt}
                </p>
              </div>

              <Badge variant={getStatusVariant(order.status)}>
                {order.status}
              </Badge>
            </div>

            {/* Items */}
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Items
              </p>

              <div className="mt-2 space-y-1">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span className="truncate text-slate-600">
                      {item.quantity}x {item.name}
                    </span>

                    <span className="shrink-0 font-semibold text-[#172033]">
                      ₦{item.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Details */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs text-slate-400">
                  Total
                </p>

                <p className="mt-1 text-sm font-bold text-[#172033]">
                  ₦{order.total.toLocaleString()}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-xs text-slate-400">
                  Payment
                </p>

                <div className="mt-1">
                  <Badge
                    variant={getPaymentVariant(order.paymentStatus)}
                  >
                    {order.paymentStatus}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Action */}
            <Link
              to={`/orders/${order.id}`}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-[#27245B] transition hover:bg-[#27245B] hover:text-white"
            >
              <Eye size={17} strokeWidth={2} />
              View Order
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrderTable;
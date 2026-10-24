import { Package } from "lucide-react";
import Badge from "../ui/Badge";
import OrderStatusControl from "./OrderStatusControl";

const AdminOrderTable = ({
  orders = [],
  onStatusChange,
  updatingOrderId = null,
}) => {
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
      Failed: "danger",
    };

    return variants[status] || "default";
  };

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleString("en-NG", {
      dateStyle: "medium",
      timeStyle: "short",
    });
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
      {/* Desktop */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[1100px]">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70">
              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Order
              </th>

              <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Customer
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
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order._id}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
              >
                {/* Order */}
                <td className="px-5 py-4">
                  <p className="text-sm font-bold text-[#172033]">
                    #{order._id.slice(-6).toUpperCase()}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {formatDate(order.createdAt)}
                  </p>
                </td>

                {/* Customer */}
                <td className="px-5 py-4">
                  <p className="text-sm font-semibold text-[#172033]">
                    {order.user?.name || "Unknown"}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {order.user?.email || "No email"}
                  </p>
                </td>

                {/* Items */}
                <td className="px-5 py-4">
                  <p className="text-sm font-semibold text-[#172033]">
                    {order.items.length}{" "}
                    {order.items.length === 1 ? "item" : "items"}
                  </p>

                  <p className="mt-1 max-w-[200px] truncate text-xs text-slate-400">
                    {order.items
                      .map(
                        (item) =>
                          `${item.quantity}x ${item.name}`
                      )
                      .join(", ")}
                  </p>
                </td>

                {/* Total */}
                <td className="px-5 py-4">
                  <p className="text-sm font-bold text-[#172033]">
                    ₦{order.total.toLocaleString()}
                  </p>
                </td>

                {/* Payment */}
                <td className="px-5 py-4">
                  <Badge
                    variant={getPaymentVariant(
                      order.paymentStatus
                    )}
                  >
                    {order.paymentStatus}
                  </Badge>
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <OrderStatusControl
                    currentStatus={order.status}
                    disabled={updatingOrderId === order._id}
                    onStatusChange={(newStatus) =>
                      onStatusChange?.(
                        order._id,
                        newStatus
                      )
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="divide-y divide-slate-100 md:hidden">
        {orders.map((order) => (
          <div key={order._id} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-[#172033]">
                  #{order._id.slice(-6).toUpperCase()}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {formatDate(order.createdAt)}
                </p>
              </div>

              <Badge variant={getStatusVariant(order.status)}>
                {order.status}
              </Badge>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Customer
              </p>

              <p className="mt-1 text-sm font-semibold text-[#172033]">
                {order.user?.name || "Unknown"}
              </p>

              <p className="text-xs text-slate-400">
                {order.user?.email || "No email"}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Items
              </p>

              <div className="mt-2 space-y-1">
                {order.items.map((item, index) => (
                  <div
                    key={`${order._id}-${index}`}
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
                    variant={getPaymentVariant(
                      order.paymentStatus
                    )}
                  >
                    {order.paymentStatus}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <OrderStatusControl
                currentStatus={order.status}
                disabled={updatingOrderId === order._id}
                onStatusChange={(newStatus) =>
                  onStatusChange?.(
                    order._id,
                    newStatus
                  )
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrderTable;
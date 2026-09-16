import { Eye } from "lucide-react";
import { Link } from 'react-router-dom';
import Badge from "../ui/Badge";

const AdminOrderTable = ({ orders = [] }) => {
  const getStatusVariant = (status) => {
    const statusVariants = {
      "Order Received": "info",
      "In Kitchen": "warning",
      "Sent to Delivery": "purple",
      Delivered: "success",
      Cancelled: "danger",
    };

    return statusVariants[status] || "default";
  };

  if (orders.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white px-6 py-12 text-center shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          No orders found.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      {/* Table Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div>
          <h2 className="text-base font-bold text-[#172033]">
            Recent Orders
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Manage and monitor customer orders
          </p>
        </div>

        <Link
          to="/admin/dashboard?section=orders"
          className="text-sm font-semibold text-[#27245B] transition hover:text-yellow-500"
        >
          View All
        </Link>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[750px]">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70">
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Order
              </th>

              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Customer
              </th>

              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Items
              </th>

              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                Total
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
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
              >
                {/* Order */}
                <td className="px-5 py-4">
                  <p className="text-sm font-bold text-[#172033]">
                    #{order.id}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {order.date}
                  </p>
                </td>

                {/* Customer */}
                <td className="px-5 py-4">
                  <p className="text-sm font-semibold text-[#172033]">
                    {order.customer?.name || "Unknown Customer"}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {order.customer?.email || "No email"}
                  </p>
                </td>

                {/* Items */}
                <td className="px-5 py-4">
                  <p className="text-sm text-slate-600">
                    {order.items?.length || 0}{" "}
                    {order.items?.length === 1 ? "item" : "items"}
                  </p>
                </td>

                {/* Total */}
                <td className="px-5 py-4">
                  <p className="text-sm font-bold text-[#172033]">
                    ₦{Number(order.total || 0).toLocaleString()}
                  </p>
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <Badge variant={getStatusVariant(order.status)}>
                    {order.status}
                  </Badge>
                </td>

                {/* Action */}
                <td className="px-5 py-4 text-right">
                  <Link
                    to={`/orders/${order.id}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-[#27245B]/10 hover:text-[#27245B]"
                    aria-label={`View order ${order.id}`}
                  >
                    <Eye size={18} strokeWidth={2} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Orders */}
      <div className="divide-y divide-slate-100 md:hidden">
        {orders.map((order) => (
          <div key={order.id} className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#172033]">
                  #{order.id}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {order.date}
                </p>
              </div>

              <Badge variant={getStatusVariant(order.status)}>
                {order.status}
              </Badge>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-400">
                  Customer
                </p>

                <p className="mt-1 text-sm font-semibold text-[#172033]">
                  {order.customer?.name || "Unknown Customer"}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Total
                </p>

                <p className="mt-1 text-sm font-bold text-[#172033]">
                  ₦{Number(order.total || 0).toLocaleString()}
                </p>
              </div>
            </div>

            <Link
              to={`/orders/${order.id}`}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-[#27245B] transition hover:bg-slate-50"
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
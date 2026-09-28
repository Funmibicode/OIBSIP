import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Package,
  Pizza,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

import CustomerLayout from "../../components/layout/CustomerLayout";
import Badge from "../../components/ui/Badge";

const Orders = () => {
  const orders = [
    {
      id: "PZ-1048",
      date: "Sep 24, 2026",
      pizza: "Pepperoni Classic",
      description: "Classic base, tomato sauce, mozzarella & pepperoni",
      quantity: 1,
      total: 8500,
      status: "In Kitchen",
      statusVariant: "warning",
    },
    {
      id: "PZ-1042",
      date: "Sep 20, 2026",
      pizza: "Chicken Supreme",
      description: "Classic base, tomato sauce, mozzarella, chicken & vegetables",
      quantity: 2,
      total: 19000,
      status: "Delivered",
      statusVariant: "success",
    },
    {
      id: "PZ-1035",
      date: "Sep 15, 2026",
      pizza: "Veggie Delight",
      description: "Classic base, tomato sauce, mozzarella & fresh vegetables",
      quantity: 1,
      total: 8000,
      status: "Delivered",
      statusVariant: "success",
    },
    {
      id: "PZ-1028",
      date: "Sep 10, 2026",
      pizza: "Custom Pizza",
      description: "Classic base, BBQ sauce, cheddar & mixed vegetables",
      quantity: 1,
      total: 9000,
      status: "Cancelled",
      statusVariant: "danger",
    },
  ];

  return (
    <CustomerLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <section>
          <h1 className="text-2xl font-extrabold text-[#172033] sm:text-3xl">
            My Orders
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            View your previous orders and track orders that are still in
            progress.
          </p>
        </section>

        {/* Summary */}
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]/10">
                <Package
                  size={20}
                  className="text-[#27245B]"
                  strokeWidth={2}
                />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400">
                  Total Orders
                </p>

                <p className="mt-0.5 text-xl font-extrabold text-[#172033]">
                  {orders.length}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/20">
                <Clock3
                  size={20}
                  className="text-yellow-600"
                  strokeWidth={2}
                />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400">
                  Active Orders
                </p>

                <p className="mt-0.5 text-xl font-extrabold text-[#172033]">
                  {
                    orders.filter(
                      (order) =>
                        order.status !== "Delivered" &&
                        order.status !== "Cancelled"
                    ).length
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                <Pizza
                  size={20}
                  className="text-green-600"
                  strokeWidth={2}
                />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400">
                  Completed
                </p>

                <p className="mt-0.5 text-xl font-extrabold text-[#172033]">
                  {
                    orders.filter((order) => order.status === "Delivered")
                      .length
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Orders Section */}
        <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#172033]">
                Order History
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                All your pizza orders in one place.
              </p>
            </div>

            {/* Search - UI only for now */}
            <div className="relative w-full sm:w-64">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search orders..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-4 text-sm text-[#172033] outline-none transition placeholder:text-slate-400 focus:border-[#27245B] focus:ring-2 focus:ring-[#27245B]/10"
              />
            </div>
          </div>

          {/* Order List */}
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-xl border border-slate-100 bg-[#F8F9FF] p-4 transition hover:border-slate-200 sm:p-5"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  {/* Order Info */}
                  <div className="flex min-w-0 gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#27245B]">
                      <Pizza
                        size={22}
                        className="text-yellow-400"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-bold text-[#172033]">
                          {order.pizza}
                        </h3>

                        <Badge variant={order.statusVariant}>
                          {order.status}
                        </Badge>
                      </div>

                      <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500">
                        {order.description}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <Package size={14} />
                          Order #{order.id}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <CalendarDays size={14} />
                          {order.date}
                        </span>

                        <span>
                          Qty:{" "}
                          <span className="font-semibold text-slate-500">
                            {order.quantity}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price + Action */}
                  <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-4 lg:min-w-48 lg:flex-col lg:items-end lg:border-0 lg:pt-0">
                    <div>
                      <p className="text-xs text-slate-400">Total</p>

                      <p className="mt-0.5 text-base font-extrabold text-[#27245B]">
                        ₦{order.total.toLocaleString()}
                      </p>
                    </div>

                    <Link
                      to={`/orders/${order.id}`}
                      className="inline-flex items-center rounded-xl bg-white px-3.5 py-2.5 text-xs font-bold text-[#27245B] shadow-sm transition hover:bg-[#27245B] hover:text-white"
                    >
                      View Details
                      <ArrowRight size={14} className="ml-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </CustomerLayout>
  );
};

export default Orders;
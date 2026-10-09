import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Package,
  Pizza,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import CustomerLayout from "../../components/layout/CustomerLayout";
import Badge from "../../components/ui/Badge";
import useOrders from "../../hooks/useOrders";

const Orders = () => {
  const {
    orders,
    fetchOrders,
    isLoading,
    error,
  } = useOrders();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchOrders().catch(() => {});
  }, [fetchOrders]);

  const formatDate = (date) => {
    if (!date) return "Date unavailable";

    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

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

  const getOrderNumber = (order) => {
    if (order.orderNumber) {
      return order.orderNumber;
    }

    return `PZ-${order._id?.slice(-4).toUpperCase()}`;
  };

  const filteredOrders = useMemo(() => {
    if (!searchTerm.trim()) {
      return orders;
    }

    const query = searchTerm.toLowerCase();

    return orders.filter((order) => {
      const orderNumber = getOrderNumber(order).toLowerCase();
      const itemName =
        order.items?.[0]?.name?.toLowerCase() || "";
      const status = order.status?.toLowerCase() || "";

      return (
        orderNumber.includes(query) ||
        itemName.includes(query) ||
        status.includes(query)
      );
    });
  }, [orders, searchTerm]);

  const totalOrders = orders.length;

  const activeOrders = orders.filter(
    (order) =>
      !["Delivered", "Cancelled"].includes(order.status)
  ).length;

  const completedOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  return (
    <CustomerLayout>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#172033]">
            My Orders
          </h1>

          <p className="mt-1 text-sm text-[#64748B]">
            Track and manage all your pizza orders.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#64748B]">
                  Total Orders
                </p>

                <p className="mt-2 text-2xl font-bold text-[#172033]">
                  {totalOrders}
                </p>
              </div>

              <div className="rounded-xl bg-[#F8F9FF] p-3">
                <Package className="h-5 w-5 text-[#27245B]" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#64748B]">
                  Active Orders
                </p>

                <p className="mt-2 text-2xl font-bold text-[#172033]">
                  {activeOrders}
                </p>
              </div>

              <div className="rounded-xl bg-[#F8F9FF] p-3">
                <Clock3 className="h-5 w-5 text-[#27245B]" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#64748B]">
                  Completed
                </p>

                <p className="mt-2 text-2xl font-bold text-[#172033]">
                  {completedOrders}
                </p>
              </div>

              <div className="rounded-xl bg-[#F8F9FF] p-3">
                <Pizza className="h-5 w-5 text-[#27245B]" />
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />

            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search orders..."
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition focus:border-[#27245B]"
            />
          </div>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="text-sm text-[#64748B]">
              Loading your orders...
            </p>
          </div>
        )}

        {/* Error */}
        {!isLoading && error && (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="font-medium text-red-600">
              {error}
            </p>

            <button
              onClick={() => fetchOrders().catch(() => {})}
              className="mt-4 text-sm font-medium text-[#27245B]"
            >
              Try again
            </button>
          </div>
        )}

        {/* Orders */}
        {!isLoading &&
          !error &&
          filteredOrders.length > 0 && (
            <div className="space-y-4">
              {filteredOrders.map((order) => {
                const firstItem = order.items?.[0];

                return (
                  <div
                    key={order._id}
                    className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#F8F9FF]">
                          <Pizza className="h-8 w-8 text-[#27245B]" />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="font-bold text-[#172033]">
                              {getOrderNumber(order)}
                            </h3>

                            <Badge
                              variant={getStatusVariant(
                                order.status
                              )}
                            >
                              {order.status}
                            </Badge>
                          </div>

                          <p className="mt-1 font-medium text-[#172033]">
                            {firstItem?.name || "Pizza Order"}
                          </p>

                          <p className="mt-1 text-sm text-[#64748B]">
                            {order.items?.length || 0} item
                            {order.items?.length === 1
                              ? ""
                              : "s"}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#64748B]">
                            <span className="flex items-center gap-1.5">
                              <CalendarDays className="h-4 w-4" />
                              {formatDate(order.createdAt)}
                            </span>

                            <span className="flex items-center gap-1.5">
                              <Package className="h-4 w-4" />
                              ₦
                              {order.total?.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Link
                        to={`/orders/${order._id}`}
                        className="flex items-center gap-2 text-sm font-semibold text-[#27245B]"
                      >
                        View Order
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        {/* Empty */}
        {!isLoading &&
          !error &&
          filteredOrders.length === 0 && (
            <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
              <Pizza className="mx-auto h-12 w-12 text-[#27245B]" />

              <h3 className="mt-4 font-bold text-[#172033]">
                No orders found
              </h3>

              <p className="mt-2 text-sm text-[#64748B]">
                {searchTerm
                  ? "Try a different search."
                  : "You haven't placed any orders yet."}
              </p>
            </div>
          )}
      </div>
    </CustomerLayout>
  );
};

export default Orders;
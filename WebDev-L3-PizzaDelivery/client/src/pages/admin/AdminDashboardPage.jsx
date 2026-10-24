import { useEffect, useState } from "react";
import { BarChart3, ClipboardList, Package } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import AdminLayout from "../../components/layout/AdminLayout";
import StatsCard from "../../components/admin/StatsCard";
import AdminOrderTable from "../../components/admin/AdminOrderTable";
import InventoryTable from "../../components/admin/InventoryTable";
import adminService from "../../services/adminService";

const AdminDashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSection =
    searchParams.get("section") || "overview";

  const [orders, setOrders] = useState([]);
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);
  const [updatingOrderId, setUpdatingOrderId] = useState(null);
  const [orderError, setOrderError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoadingOrders(true);
        setOrderError("");

        const response = await adminService.getOrders();

        setOrders(response.orders || []);
      } catch (error) {
        console.error("Fetch admin orders error:", error);

        setOrderError(
          error.response?.data?.message ||
            "Unable to load orders."
        );
      } finally {
        setIsLoadingOrders(false);
      }
    };

    fetchOrders();
  }, []);

  const handleSectionChange = (section) => {
    if (section === "overview") {
      setSearchParams({});
      return;
    }

    setSearchParams({ section });
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      setUpdatingOrderId(orderId);

      const response =
        await adminService.updateOrderStatus(
          orderId,
          newStatus
        );

      setOrders((currentOrders) =>
        currentOrders.map((order) =>
          order._id === orderId
            ? response.order
            : order
        )
      );
    } catch (error) {
      console.error("Update order status error:", error);

      alert(
        error.response?.data?.message ||
          "Unable to update order status."
      );
    } finally {
      setUpdatingOrderId(null);
    }
  };

  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) => order.status === "Order Received"
  ).length;

  const recentOrders = orders.slice(0, 5);

  const navigationItems = [
    {
      label: "Overview",
      value: "overview",
      icon: BarChart3,
    },
    {
      label: "Orders",
      value: "orders",
      icon: ClipboardList,
    },
    {
      label: "Inventory",
      value: "inventory",
      icon: Package,
    },
  ];

  const orderTableProps = {
    orders: recentOrders,
    onStatusChange: handleStatusChange,
    updatingOrderId,
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Heading */}
        <div>
          <h1 className="text-2xl font-extrabold text-[#172033]">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Monitor your orders, inventory, and pizza business.
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-100 bg-white p-2 shadow-sm">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              currentSection === item.value;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() =>
                  handleSectionChange(item.value)
                }
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#27245B] text-white"
                    : "text-slate-500 hover:bg-slate-50 hover:text-[#27245B]"
                }`}
              >
                <Icon size={17} strokeWidth={2} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Loading State */}
        {isLoadingOrders && (
          <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
            <p className="text-sm text-slate-500">
              Loading orders...
            </p>
          </div>
        )}

        {/* Error State */}
        {orderError && !isLoadingOrders && (
          <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
            <p className="text-sm font-medium text-red-600">
              {orderError}
            </p>
          </div>
        )}

        {/* Overview */}
        {currentSection === "overview" &&
          !isLoadingOrders && (
            <section className="space-y-6">
              {/* Statistics */}
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatsCard
                  title="Total Users"
                  value="1,248"
                />

                <StatsCard
                  title="Total Products"
                  value="24"
                />

                <StatsCard
                  title="Total Orders"
                  value={totalOrders}
                />

                <StatsCard
                  title="Pending Orders"
                  value={pendingOrders}
                />
              </div>

              {/* Recent Orders */}
              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-[#172033]">
                      Recent Orders
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Latest customer orders.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleSectionChange("orders")
                    }
                    className="text-sm font-semibold text-[#27245B] transition hover:text-yellow-500"
                  >
                    View All
                  </button>
                </div>

                <AdminOrderTable
                  {...orderTableProps}
                />
              </div>
            </section>
          )}

        {/* Orders */}
        {currentSection === "orders" &&
          !isLoadingOrders && (
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="mb-5">
                <h2 className="text-lg font-bold text-[#172033]">
                  Order Management
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  View orders and update their delivery
                  status.
                </p>
              </div>

              <AdminOrderTable
                orders={orders}
                onStatusChange={handleStatusChange}
                updatingOrderId={updatingOrderId}
              />
            </section>
          )}

        {/* Inventory */}
        {currentSection === "inventory" && (
          <section className="space-y-5">
            <div>
              <h2 className="text-lg font-bold text-[#172033]">
                Inventory Management
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Monitor stock levels and update inventory.
              </p>
            </div>

            <InventoryTable />
          </section>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
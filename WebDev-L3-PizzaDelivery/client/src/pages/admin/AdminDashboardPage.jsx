import { BarChart3, ClipboardList, Package } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import AdminLayout from "../../components/layout/AdminLayout";
import StatsCard from "../../components/admin/StatsCard";
import AdminOrderTable from "../../components/admin/AdminOrderTable";
import InventoryTable from "../../components/admin/InventoryTable";

const AdminDashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSection = searchParams.get("section") || "overview";

  const handleSectionChange = (section) => {
    if (section === "overview") {
      setSearchParams({});
      return;
    }

    setSearchParams({ section });
  };

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
            const isActive = currentSection === item.value;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => handleSectionChange(item.value)}
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

        {/* Overview */}
        {currentSection === "overview" && (
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
                value="856"
              />

              <StatsCard
                title="Pending Orders"
                value="18"
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
                  onClick={() => handleSectionChange("orders")}
                  className="text-sm font-semibold text-[#27245B] transition hover:text-yellow-500"
                >
                  View All
                </button>
              </div>

              <AdminOrderTable />
            </div>
          </section>
        )}

        {/* Orders */}
        {currentSection === "orders" && (
          <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="mb-5">
              <h2 className="text-lg font-bold text-[#172033]">
                Order Management
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                View orders and update their delivery status.
              </p>
            </div>

            <AdminOrderTable />
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
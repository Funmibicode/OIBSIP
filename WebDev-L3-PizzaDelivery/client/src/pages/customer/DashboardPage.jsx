import {
  ArrowRight,
  Clock3,
  MapPin,
  Package,
  Pizza,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

import CustomerLayout from "../../components/layout/CustomerLayout";
import Button from "../../components/ui/Button";

const Dashboard = () => {
  const recentOrder = {
    id: "#PZ-1048",
    pizza: "Pepperoni Classic",
    status: "In Kitchen",
    total: 8500,
    estimatedTime: "20–25 min",
  };

  const popularPizzas = [
    {
      name: "Pepperoni Classic",
      description: "Pepperoni, mozzarella & tomato sauce",
      price: 8500,
    },
    {
      name: "Chicken Supreme",
      description: "Chicken, peppers, onions & mozzarella",
      price: 9500,
    },
    {
      name: "Veggie Delight",
      description: "Fresh vegetables, cheese & tomato sauce",
      price: 8000,
    },
  ];

  return (
    <CustomerLayout>
      <div className="space-y-6">
        {/* Page Heading */}
        <section>
          <p className="text-sm font-semibold text-[#27245B]">
            Customer Dashboard
          </p>

          <h1 className="mt-1 text-2xl font-extrabold text-[#172033] sm:text-3xl">
            Your pizza, your way.
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Order your favourite pizza or create a custom one exactly how you
            like it.
          </p>
        </section>

        {/* Main CTA */}
        <section className="overflow-hidden rounded-2xl bg-[#27245B] p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400">
                <Pizza
                  size={24}
                  className="text-[#27245B]"
                  strokeWidth={2.2}
                />
              </div>

              <h2 className="text-2xl font-extrabold text-white">
                Build your perfect pizza
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-white/70">
                Choose your base, sauce, cheese and favourite vegetables. Make
                a pizza that is completely yours.
              </p>

              <Link to="/order-pizza" className="mt-6 inline-flex">
                <Button size="md">
                  Start Your Order
                  <ArrowRight size={17} className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="hidden h-32 w-32 items-center justify-center rounded-full bg-white/10 lg:flex">
              <Pizza
                size={64}
                className="text-yellow-400"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]/10">
                <ShoppingBag
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
                  12
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
                  Active Order
                </p>
                <p className="mt-0.5 text-xl font-extrabold text-[#172033]">
                  1
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                <Package
                  size={20}
                  className="text-green-600"
                  strokeWidth={2}
                />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400">
                  Last Order
                </p>
                <p className="mt-0.5 text-xl font-extrabold text-[#172033]">
                  Delivered
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Order */}
        <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#172033]">
                Active Order
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Track your latest pizza order.
              </p>
            </div>

            <Link
              to="/orders"
              className="inline-flex items-center text-sm font-semibold text-[#27245B] transition hover:text-yellow-500"
            >
              View Orders
              <ArrowRight size={16} className="ml-1.5" />
            </Link>
          </div>

          <div className="rounded-xl bg-[#F8F9FF] p-4 sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#27245B]">
                  <Pizza
                    size={21}
                    className="text-white"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#172033]">
                    {recentOrder.pizza}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Order {recentOrder.id}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1.5 text-xs font-bold text-yellow-700">
                  {recentOrder.status}
                </span>

                <span className="text-sm font-bold text-[#172033]">
                  ₦{recentOrder.total.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500">
              <MapPin size={15} />
              <span>Estimated delivery: {recentOrder.estimatedTime}</span>
            </div>
          </div>
        </section>

        {/* Popular Pizzas */}
        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-[#172033]">
                Popular Choices
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Customer favourites you might enjoy.
              </p>
            </div>

            <Link
              to="/order-pizza"
              className="hidden items-center text-sm font-semibold text-[#27245B] transition hover:text-yellow-500 sm:inline-flex"
            >
              View Menu
              <ArrowRight size={16} className="ml-1.5" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {popularPizzas.map((pizza) => (
              <div
                key={pizza.name}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#27245B]/10">
                  <Pizza
                    size={27}
                    className="text-[#27245B]"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-4 text-base font-bold text-[#172033]">
                  {pizza.name}
                </h3>

                <p className="mt-1 min-h-10 text-xs leading-5 text-slate-500">
                  {pizza.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#27245B]">
                    ₦{pizza.price.toLocaleString()}
                  </span>

                  <Link
                    to="/order-pizza"
                    className="text-xs font-bold text-[#27245B] hover:text-yellow-500"
                  >
                    Order
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </CustomerLayout>
  );
};

export default Dashboard;
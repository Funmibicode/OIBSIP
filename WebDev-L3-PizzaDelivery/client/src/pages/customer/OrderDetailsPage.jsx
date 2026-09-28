import {
  ArrowLeft,
  Check,
  Clock3,
  CreditCard,
  MapPin,
  Package,
  Pizza,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import CustomerLayout from "../../components/layout/CustomerLayout";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";

const OrderDetails = () => {
  const { orderId } = useParams();

  const order = {
    id: orderId || "PZ-1048",
    date: "September 24, 2026",
    status: "In Kitchen",
    statusVariant: "warning",
    estimatedTime: "20–25 minutes",

    pizza: {
      name: "Pepperoni Classic",
      base: "Classic",
      sauce: "Tomato",
      cheese: "Mozzarella",
      toppings: ["Pepperoni", "Onions", "Green Pepper"],
    },

    quantity: 1,
    subtotal: 8500,
    deliveryFee: 1000,
    total: 9500,

    delivery: {
      address: "12 Example Street, Ikeja",
      city: "Lagos, Nigeria",
    },

    payment: {
      method: "Razorpay",
      status: "Paid",
      reference: "pay_demo_1048",
    },
  };

  const timeline = [
    {
      title: "Order Received",
      description: "Your order has been received successfully.",
      completed: true,
    },
    {
      title: "In Kitchen",
      description: "Your pizza is currently being prepared.",
      completed: true,
      current: true,
    },
    {
      title: "Sent to Delivery",
      description: "Your pizza will be handed to our delivery partner.",
      completed: false,
    },
  ];

  return (
    <CustomerLayout>
      <div className="space-y-6">
        {/* Header */}
        <section>
          <Link
            to="/orders"
            className="mb-3 inline-flex items-center text-sm font-medium text-slate-500 transition hover:text-[#27245B]"
          >
            <ArrowLeft size={16} className="mr-1.5" />
            Back to Orders
          </Link>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#27245B]">
                Order #{order.id}
              </p>

              <h1 className="mt-1 text-2xl font-extrabold text-[#172033] sm:text-3xl">
                Order Details
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Placed on {order.date}
              </p>
            </div>

            <Badge variant={order.statusVariant}>{order.status}</Badge>
          </div>
        </section>

        {/* Order Tracking */}
        <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#172033]">
                Track Your Order
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Follow your pizza as it moves through the kitchen and delivery
                process.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#27245B]">
              <Clock3 size={17} />
              {order.estimatedTime}
            </div>
          </div>

          <div className="mt-8">
            {timeline.map((step, index) => {
              const isLast = index === timeline.length - 1;

              return (
                <div key={step.title} className="flex gap-4">
                  {/* Timeline indicator */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        step.completed
                          ? "bg-[#27245B] text-white"
                          : "border-2 border-slate-200 bg-white text-slate-300"
                      }`}
                    >
                      {step.completed ? (
                        <Check size={18} strokeWidth={2.5} />
                      ) : (
                        <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                      )}
                    </div>

                    {!isLast && (
                      <div
                        className={`my-1 h-12 w-0.5 ${
                          step.completed
                            ? "bg-[#27245B]"
                            : "bg-slate-200"
                        }`}
                      />
                    )}
                  </div>

                  {/* Timeline content */}
                  <div className="pb-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className={`text-sm font-bold ${
                          step.completed
                            ? "text-[#172033]"
                            : "text-slate-400"
                        }`}
                      >
                        {step.title}
                      </h3>

                      {step.current && (
                        <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-[10px] font-bold text-yellow-700">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Pizza Details */}
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]/10">
                  <Pizza
                    size={20}
                    className="text-[#27245B]"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#172033]">
                    Order Items
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Details of the pizza in this order.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-[#F8F9FF] p-4 sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#27245B]">
                    <Pizza
                      size={29}
                      className="text-yellow-400"
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="font-bold text-[#172033]">
                        {order.pizza.name}
                      </h3>

                      <span className="text-sm font-extrabold text-[#27245B]">
                        ₦{order.subtotal.toLocaleString()}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-slate-500">
                      {order.pizza.base} base · {order.pizza.sauce} sauce ·{" "}
                      {order.pizza.cheese} cheese
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {order.pizza.toppings.map((topping) => (
                        <span
                          key={topping}
                          className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-slate-500"
                        >
                          {topping}
                        </span>
                      ))}
                    </div>

                    <p className="mt-3 text-xs font-semibold text-slate-400">
                      Quantity: {order.quantity}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Delivery */}
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]/10">
                  <Truck
                    size={20}
                    className="text-[#27245B]"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#172033]">
                    Delivery Details
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Your selected delivery address.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-[#F8F9FF] p-4">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-[#27245B]"
                />

                <div>
                  <p className="text-sm font-bold text-[#172033]">
                    Delivery Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {order.delivery.address}
                    <br />
                    {order.delivery.city}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            {/* Payment */}
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]/10">
                  <CreditCard
                    size={20}
                    className="text-[#27245B]"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#172033]">
                    Payment
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Payment information
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-[#F8F9FF] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Method</span>

                  <span className="text-sm font-semibold text-[#172033]">
                    {order.payment.method}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-slate-500">Status</span>

                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-green-600">
                    <Check size={15} strokeWidth={2.5} />
                    {order.payment.status}
                  </span>
                </div>

                <div className="mt-3 border-t border-slate-200 pt-3">
                  <p className="text-xs text-slate-400">Payment Reference</p>

                  <p className="mt-1 break-all text-xs font-medium text-slate-600">
                    {order.payment.reference}
                  </p>
                </div>
              </div>
            </section>

            {/* Order Summary */}
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-[#172033]">
                Order Summary
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Subtotal</span>

                  <span className="font-semibold text-[#172033]">
                    ₦{order.subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Delivery Fee</span>

                  <span className="font-semibold text-[#172033]">
                    ₦{order.deliveryFee.toLocaleString()}
                  </span>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#172033]">Total</span>

                    <span className="text-xl font-extrabold text-[#27245B]">
                      ₦{order.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-2 rounded-xl bg-green-50 p-3">
                <ShieldCheck
                  size={17}
                  className="mt-0.5 shrink-0 text-green-600"
                  strokeWidth={2}
                />

                <p className="text-xs leading-5 text-green-700">
                  Your payment has been securely recorded.
                </p>
              </div>

              <Link to="/order-pizza" className="mt-5 block">
                <Button variant="secondary" className="w-full">
                  Order Another Pizza
                </Button>
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default OrderDetails;
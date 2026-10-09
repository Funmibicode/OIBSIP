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

import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import CustomerLayout from "../../components/layout/CustomerLayout";
import Badge from "../../components/ui/Badge";
import useOrders from "../../hooks/useOrders";

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const {
    order,
    fetchOrder,
    isLoading,
    error,
  } = useOrders();

  useEffect(() => {
    if (orderId) {
      fetchOrder(orderId).catch(() => {});
    }
  }, [orderId, fetchOrder]);

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

  const getOrderNumber = (currentOrder) => {
    if (currentOrder?.orderNumber) {
      return currentOrder.orderNumber;
    }

    return currentOrder?._id
      ? `PZ-${currentOrder._id.slice(-4).toUpperCase()}`
      : "PZ-0000";
  };

  const getTimeline = (status) => {
    const steps = [
      {
        title: "Order Received",
        description: "We've received your order.",
      },
      {
        title: "In Kitchen",
        description: "Your pizza is being prepared.",
      },
      {
        title: "Sent to Delivery",
        description: "Your order is on the way.",
      },
    ];

    const statusIndex = steps.findIndex(
      (step) => step.title === status
    );

    return steps.map((step, index) => ({
      ...step,
      completed:
        status === "Delivered"
          ? true
          : statusIndex >= index,
      current:
        status !== "Delivered" &&
        status !== "Cancelled" &&
        index === statusIndex,
    }));
  };

  if (isLoading) {
    return (
      <CustomerLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-sm text-[#64748B]">
            Loading order...
          </p>
        </div>
      </CustomerLayout>
    );
  }

  if (error || !order) {
    return (
      <CustomerLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <Package className="mx-auto h-12 w-12 text-[#27245B]" />

            <h2 className="mt-4 text-xl font-bold text-[#172033]">
              Unable to load order
            </h2>

            <p className="mt-2 text-sm text-[#64748B]">
              {error || "This order could not be found."}
            </p>

            <Link to="/orders">
              <button className="mt-6 rounded-xl bg-[#27245B] px-5 py-3 text-sm font-semibold text-white">
                Back to Orders
              </button>
            </Link>
          </div>
        </div>
      </CustomerLayout>
    );
  }

  const firstItem = order.items?.[0];

  const ingredients = firstItem?.ingredients || {};

  const timeline = getTimeline(order.status);

  const orderNumber = getOrderNumber(order);

  return (
    <CustomerLayout>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link
            to="/orders"
            className="rounded-xl p-2 transition hover:bg-gray-100"
          >
            <ArrowLeft className="h-5 w-5 text-[#172033]" />
          </Link>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold text-[#172033]">
                {orderNumber}
              </h1>

              <Badge variant={getStatusVariant(order.status)}>
                {order.status}
              </Badge>
            </div>

            <p className="mt-1 text-sm text-[#64748B]">
              {formatDate(order.createdAt)}
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main */}
          <div className="space-y-6 lg:col-span-2">
            {/* Tracking */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F9FF] p-3">
                  <Truck className="h-5 w-5 text-[#27245B]" />
                </div>

                <div>
                  <h2 className="font-bold text-[#172033]">
                    Order Tracking
                  </h2>

                  <p className="text-sm text-[#64748B]">
                    Track your pizza order.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {timeline.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex gap-4"
                  >
                    <div className="relative">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          step.completed
                            ? "bg-[#27245B] text-white"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {step.completed ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <Clock3 className="h-5 w-5" />
                        )}
                      </div>

                      {index < timeline.length - 1 && (
                        <div
                          className={`absolute left-1/2 top-10 h-6 w-px -translate-x-1/2 ${
                            timeline[index + 1].completed
                              ? "bg-[#27245B]"
                              : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>

                    <div className="pt-1">
                      <p className="font-semibold text-[#172033]">
                        {step.title}
                      </p>

                      <p className="mt-1 text-sm text-[#64748B]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pizza */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F9FF] p-3">
                  <Pizza className="h-5 w-5 text-[#27245B]" />
                </div>

                <div>
                  <h2 className="font-bold text-[#172033]">
                    Pizza Details
                  </h2>

                  <p className="text-sm text-[#64748B]">
                    What's in your order.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-[#F8F9FF]">
                  <Pizza className="h-10 w-10 text-[#27245B]" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-[#172033]">
                        {firstItem?.name || "Pizza Order"}
                      </h3>

                      <p className="mt-1 text-sm text-[#64748B]">
                        Quantity: {firstItem?.quantity || 1}
                      </p>
                    </div>

                    <p className="font-bold text-[#172033]">
                      ₦
                      {firstItem?.price?.toLocaleString() ||
                        "0"}
                    </p>
                  </div>

                  <div className="mt-4 space-y-1 text-sm text-[#64748B]">
                    {ingredients.base && (
                      <p>
                        Base: {ingredients.base}
                      </p>
                    )}

                    {ingredients.sauce && (
                      <p>
                        Sauce: {ingredients.sauce}
                      </p>
                    )}

                    {ingredients.cheese && (
                      <p>
                        Cheese: {ingredients.cheese}
                      </p>
                    )}

                    {ingredients.vegetables?.length > 0 && (
                      <p>
                        Toppings:{" "}
                        {ingredients.vegetables.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F9FF] p-3">
                  <MapPin className="h-5 w-5 text-[#27245B]" />
                </div>

                <div>
                  <h2 className="font-bold text-[#172033]">
                    Delivery Information
                  </h2>

                  <p className="text-sm text-[#64748B]">
                    Your delivery address.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-[#F8F9FF] p-4">
                <p className="font-medium text-[#172033]">
                  12 Example Street, Ikeja
                </p>

                <p className="mt-1 text-sm text-[#64748B]">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F9FF] p-3">
                  <CreditCard className="h-5 w-5 text-[#27245B]" />
                </div>

                <div>
                  <h2 className="font-bold text-[#172033]">
                    Payment Information
                  </h2>

                  <p className="text-sm text-[#64748B]">
                    Payment status for this order.
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">
                    Method
                  </span>

                  <span className="font-medium text-[#172033]">
                    Razorpay
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#64748B]">
                    Status
                  </span>

                  <span className="font-medium text-[#172033]">
                    {order.paymentStatus}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-[#64748B]">
                    Reference
                  </span>

                  <span className="break-all text-right font-medium text-[#172033]">
                    {order.paymentReference ||
                      "Not available"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="sticky top-6 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-bold text-[#172033]">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">
                    Subtotal
                  </span>

                  <span className="font-medium text-[#172033]">
                    ₦{order.subtotal?.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#64748B]">
                    Delivery Fee
                  </span>

                  <span className="font-medium text-[#172033]">
                    ₦{order.deliveryFee?.toLocaleString()}
                  </span>
                </div>

                <div className="my-4 border-t border-gray-200" />

                <div className="flex justify-between">
                  <span className="font-bold text-[#172033]">
                    Total
                  </span>

                  <span className="text-xl font-bold text-[#27245B]">
                    ₦{order.total?.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate("/order-pizza")}
                className="mt-6 w-full rounded-xl bg-[#27245B] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Order Another Pizza
              </button>

              <div className="mt-5 flex gap-3 rounded-xl bg-[#F8F9FF] p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#27245B]" />

                <p className="text-xs leading-5 text-[#64748B]">
                  Your order information is securely stored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default OrderDetails;
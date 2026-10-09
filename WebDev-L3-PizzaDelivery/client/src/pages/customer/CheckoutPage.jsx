import {
  ArrowLeft,
  Check,
  CreditCard,
  MapPin,
  Package,
  Pizza,
  ShieldCheck,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomerLayout from "../../components/layout/CustomerLayout";
import Button from "../../components/ui/Button";
import useOrders from "../../hooks/useOrders";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { createOrder, isLoading } = useOrders();

  const orderData = location.state;

  if (!orderData?.pizza) {
    return (
      <CustomerLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <Pizza className="mx-auto mb-4 h-12 w-12 text-[#27245B]" />

            <h2 className="text-xl font-bold text-[#172033]">
              No Pizza Selected
            </h2>

            <p className="mt-2 text-sm text-[#64748B]">
              Please select or build a pizza before checking out.
            </p>

            <Link to="/dashboard">
              <Button className="mt-6">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </CustomerLayout>
    );
  }

  const { pizza, type } = orderData;

  const customIngredients = orderData.ingredients;

  const customSubtotal =
    (customIngredients?.base?.price || 0) +
    (customIngredients?.sauce?.price || 0) +
    (customIngredients?.cheese?.price || 0) +
    (customIngredients?.vegetables || []).reduce(
      (total, vegetable) => total + (vegetable.price || 0),
      0
    );

  const subtotal =
    type === "custom"
      ? customSubtotal
      : orderData.price || 0;

  const deliveryFee = 1000;
  const total = subtotal + deliveryFee;

  const getIngredients = () => {
    if (type === "custom") {
      return {
        base: customIngredients?.base?.name || "",
        sauce: customIngredients?.sauce?.name || "",
        cheese: customIngredients?.cheese?.name || "",
        vegetables:
          customIngredients?.vegetables?.map(
            (vegetable) => vegetable.name
          ) || [],
      };
    }

    return {
      base: pizza.base || "",
      sauce: pizza.sauce || "",
      cheese: pizza.cheese || "",
      vegetables: pizza.toppings || [],
    };
  };

  const handlePlaceOrder = async () => {
    try {
      const orderPayload = {
        items: [
          {
            type,
            name: pizza.name,
            price: subtotal,
            quantity: 1,
            ingredients: getIngredients(),
          },
        ],
        deliveryFee,
      };

      const response = await createOrder(orderPayload);

      if (response.order?._id) {
        navigate(`/orders/${response.order._id}`);
      }
    } catch (error) {
      console.error("Create order error:", error);
    }
  };

  return (
    <CustomerLayout>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link
            to="/order-pizza"
            className="rounded-xl p-2 transition hover:bg-gray-100"
          >
            <ArrowLeft className="h-5 w-5 text-[#172033]" />
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-[#172033]">
              Checkout
            </h1>

            <p className="mt-1 text-sm text-[#64748B]">
              Review your order before payment.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main */}
          <div className="space-y-6 lg:col-span-2">
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
                    Where should we deliver your order?
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

            {/* Order */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-[#F8F9FF] p-3">
                  <Package className="h-5 w-5 text-[#27245B]" />
                </div>

                <div>
                  <h2 className="font-bold text-[#172033]">
                    Your Order
                  </h2>

                  <p className="text-sm text-[#64748B]">
                    Review your pizza.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#F8F9FF]">
                  {pizza.image ? (
                    <img
                      src={pizza.image}
                      alt={pizza.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Pizza className="h-10 w-10 text-[#27245B]" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-[#172033]">
                    {pizza.name}
                  </h3>

                  <div className="mt-2 space-y-1 text-sm text-[#64748B]">
                    <p>Base: {getIngredients().base}</p>
                    <p> Sauce: {getIngredients().sauce}</p>
                    <p>Cheese: {getIngredients().cheese}</p>

                    {getIngredients().vegetables.length > 0 && (
                      <p>
                        Toppings:{" "}
                        {getIngredients().vegetables.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
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
                    Payment Method
                  </h2>

                  <p className="text-sm text-[#64748B]">
                    Secure payment with Razorpay.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-[#27245B]" />

                  <span className="font-medium text-[#172033]">
                    Razorpay
                  </span>
                </div>

                <Check className="h-5 w-5 text-green-600" />
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
                    ₦{subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#64748B]">
                    Delivery Fee
                  </span>

                  <span className="font-medium text-[#172033]">
                    ₦{deliveryFee.toLocaleString()}
                  </span>
                </div>

                <div className="my-4 border-t border-gray-200" />

                <div className="flex justify-between">
                  <span className="font-bold text-[#172033]">
                    Total
                  </span>

                  <span className="text-xl font-bold text-[#27245B]">
                    ₦{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <Button
                className="mt-6 w-full"
                onClick={handlePlaceOrder}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Pay with Razorpay"}
              </Button>

              <div className="mt-5 flex gap-3 rounded-xl bg-[#F8F9FF] p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#27245B]" />

                <p className="text-xs leading-5 text-[#64748B]">
                  Your payment is securely processed through
                  Razorpay test mode.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Checkout;
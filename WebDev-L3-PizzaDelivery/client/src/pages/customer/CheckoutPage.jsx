import {
  ArrowLeft,
  Check,
  CreditCard,
  MapPin,
  Package,
  Pizza,
  ShieldCheck,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import CustomerLayout from "../../components/layout/CustomerLayout";
import Button from "../../components/ui/Button";

const Checkout = () => {
  const location = useLocation();

  const pizzaData = location.state;

  /*
   * If the user somehow visits /checkout directly without
   * coming from the Pizza Builder, there will be no pizza data.
   */
  if (!pizzaData?.pizza || !pizzaData?.ingredients) {
    return (
      <CustomerLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#27245B]/10">
              <Pizza
                size={28}
                className="text-[#27245B]"
                strokeWidth={1.8}
              />
            </div>

            <h1 className="mt-5 text-xl font-extrabold text-[#172033]">
              No Pizza Selected
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Please build your pizza first before proceeding to checkout.
            </p>

            <Link to="/order-pizza" className="mt-6 inline-flex">
              <Button>
                Build Your Pizza
              </Button>
            </Link>
          </div>
        </div>
      </CustomerLayout>
    );
  }

  const { pizza, ingredients } = pizzaData;

  const basePrice = ingredients.base?.price || 0;
  const saucePrice = ingredients.sauce?.price || 0;
  const cheesePrice = ingredients.cheese?.price || 0;

  const vegetablesPrice = ingredients.vegetables.reduce(
    (total, vegetable) => total + (vegetable.price || 0),
    0
  );

  const subtotal =
    basePrice + saucePrice + cheesePrice + vegetablesPrice;

  const deliveryFee = 1000;
  const total = subtotal + deliveryFee;

  return (
    <CustomerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <Link
            to="/order-pizza"
            className="mb-3 inline-flex items-center text-sm font-medium text-slate-500 transition hover:text-[#27245B]"
          >
            <ArrowLeft size={16} className="mr-1.5" />
            Back to Pizza Builder
          </Link>

          <h1 className="text-2xl font-extrabold text-[#172033] sm:text-3xl">
            Checkout
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Review your order, confirm your delivery details, and complete
            your payment.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Delivery Information */}
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]/10">
                  <MapPin
                    size={20}
                    className="text-[#27245B]"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#172033]">
                    Delivery Information
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Where should we deliver your pizza?
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#F8F9FF] p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#172033]">
                      Home Address
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      12 Example Street, Ikeja
                      <br />
                      Lagos, Nigeria
                    </p>
                  </div>

                  <button
                    type="button"
                    className="text-sm font-semibold text-[#27245B] transition hover:text-yellow-500"
                  >
                    Change
                  </button>
                </div>
              </div>
            </section>

            {/* Order Details */}
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]/10">
                  <Package
                    size={20}
                    className="text-[#27245B]"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#172033]">
                    Your Order
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Review your pizza before paying.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-[#F8F9FF] p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#27245B]">
                    <Pizza
                      size={26}
                      className="text-yellow-400"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-sm font-bold text-[#172033]">
                        Custom Pizza
                      </h3>

                      <span className="text-sm font-extrabold text-[#27245B]">
                        ₦{subtotal.toLocaleString()}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-slate-500">
                      {pizza.base} base · {pizza.sauce} sauce ·{" "}
                      {pizza.cheese} cheese
                    </p>

                    {pizza.toppings.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {pizza.toppings.map((topping) => (
                          <span
                            key={topping}
                            className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-slate-500"
                          >
                            {topping}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]/10">
                  <CreditCard
                    size={20}
                    className="text-[#27245B]"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#172033]">
                    Payment Method
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Secure payment powered by Razorpay.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border-2 border-[#27245B] bg-[#27245B]/5 p-4">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#27245B]">
                  <Check
                    size={13}
                    className="text-white"
                    strokeWidth={3}
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-bold text-[#172033]">
                    Razorpay
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Card, bank transfer, USSD and other supported methods.
                  </p>
                </div>

                <CreditCard
                  size={20}
                  className="text-[#27245B]"
                  strokeWidth={1.8}
                />
              </div>
            </section>
          </div>

          {/* Right Column */}
          <aside className="h-fit lg:sticky lg:top-6">
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-[#172033]">
                Order Summary
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Pizza</span>

                  <span className="font-semibold text-[#172033]">
                    ₦{subtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Delivery Fee</span>

                  <span className="font-semibold text-[#172033]">
                    ₦{deliveryFee.toLocaleString()}
                  </span>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#172033]">
                      Total
                    </span>

                    <span className="text-xl font-extrabold text-[#27245B]">
                      ₦{total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Button */}
              <Button
                type="button"
                size="lg"
                className="mt-6 w-full"
              >
                Pay ₦{total.toLocaleString()}
              </Button>

              <div className="mt-4 flex items-start gap-2 rounded-xl bg-green-50 p-3">
                <ShieldCheck
                  size={17}
                  className="mt-0.5 shrink-0 text-green-600"
                  strokeWidth={2}
                />

                <p className="text-xs leading-5 text-green-700">
                  Your payment will be securely processed through Razorpay
                  test mode.
                </p>
              </div>

              <p className="mt-4 text-center text-[11px] leading-5 text-slate-400">
                By completing your payment, you agree to the terms and
                conditions of the order.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Checkout;
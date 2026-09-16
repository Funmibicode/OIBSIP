import {
  Check,
  ChefHat,
  PackageCheck,
  Truck,
  XCircle,
} from "lucide-react";

const OrderTimeline = ({ status }) => {
  const steps = [
    {
      label: "Order Received",
      description: "We've received your order.",
      icon: PackageCheck,
    },
    {
      label: "In Kitchen",
      description: "Your pizza is being prepared.",
      icon: ChefHat,
    },
    {
      label: "Sent to Delivery",
      description: "Your order is on its way.",
      icon: Truck,
    },
    {
      label: "Delivered",
      description: "Your order has arrived.",
      icon: Check,
    },
  ];

  const currentStepIndex = steps.findIndex(
    (step) => step.label === status
  );

  const isCancelled = status === "Cancelled";

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-base font-bold text-[#172033]">
          Order Tracking
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Follow your order from preparation to delivery.
        </p>
      </div>

      {isCancelled ? (
        <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
            <XCircle size={21} strokeWidth={2} />
          </div>

          <div>
            <p className="text-sm font-bold text-red-700">
              Order Cancelled
            </p>

            <p className="mt-1 text-xs text-red-600">
              This order is no longer being processed.
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            const isCompleted =
              currentStepIndex >= 0 && index < currentStepIndex;

            const isCurrent = index === currentStepIndex;

            const isUpcoming =
              currentStepIndex >= 0 && index > currentStepIndex;

            return (
              <div
                key={step.label}
                className="relative flex gap-4"
              >
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-5 top-10 h-10 w-0.5 ${
                      isCompleted
                        ? "bg-[#27245B]"
                        : "bg-slate-200"
                    }`}
                  />
                )}

                {/* Icon */}
                <div
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${
                    isCurrent
                      ? "border-[#27245B] bg-[#27245B] text-white"
                      : isCompleted
                      ? "border-[#27245B] bg-[#27245B] text-white"
                      : "border-slate-200 bg-white text-slate-400"
                  }`}
                >
                  <Icon size={18} strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="min-w-0 pb-8">
                  <p
                    className={`text-sm font-bold ${
                      isUpcoming
                        ? "text-slate-400"
                        : "text-[#172033]"
                    }`}
                  >
                    {step.label}
                  </p>

                  <p
                    className={`mt-1 text-xs ${
                      isUpcoming
                        ? "text-slate-400"
                        : "text-slate-500"
                    }`}
                  >
                    {step.description}
                  </p>

                  {isCurrent && (
                    <span className="mt-2 inline-block rounded-full bg-[#27245B]/10 px-2.5 py-1 text-[11px] font-bold text-[#27245B]">
                      Current Status
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OrderTimeline;
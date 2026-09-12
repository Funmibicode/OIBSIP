import { Calculator } from "lucide-react";
import Button from "../ui/Button";

const PriceSummary = ({
  base,
  sauce,
  cheese,
  vegetables = [],
  onContinue,
}) => {
  const basePrice = base?.price || 0;
  const saucePrice = sauce?.price || 0;
  const cheesePrice = cheese?.price || 0;

  const vegetablesPrice = vegetables.reduce(
    (total, vegetable) => total + (vegetable.price || 0),
    0
  );

  const totalPrice =
    basePrice +
    saucePrice +
    cheesePrice +
    vegetablesPrice;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#27245B]/10 text-[#27245B]">
          <Calculator size={20} />
        </div>

        <div>
          <h3 className="font-semibold text-[#172033]">
            Price Summary
          </h3>

          <p className="text-sm text-slate-500">
            Your pizza cost
          </p>
        </div>
      </div>

      {/* Breakdown */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">
            Base
          </span>

          <span className="font-medium text-[#172033]">
            ₦{basePrice.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">
            Sauce
          </span>

          <span className="font-medium text-[#172033]">
            ₦{saucePrice.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">
            Cheese
          </span>

          <span className="font-medium text-[#172033]">
            ₦{cheesePrice.toLocaleString()}
          </span>
        </div>

        {vegetables.length > 0 && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">
              Vegetables
            </span>

            <span className="font-medium text-[#172033]">
              ₦{vegetablesPrice.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="font-semibold text-[#172033]">
          Total
        </span>

        <span className="text-xl font-bold text-[#27245B]">
          ₦{totalPrice.toLocaleString()}
        </span>
      </div>

      {/* Continue */}
      {onContinue && (
        <Button
          type="button"
          size="lg"
          className="mt-5 w-full"
          onClick={onContinue}
        >
          Continue to Checkout
        </Button>
      )}
    </div>
  );
};

export default PriceSummary;
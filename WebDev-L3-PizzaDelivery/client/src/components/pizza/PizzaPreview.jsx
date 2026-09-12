import { Pizza } from "lucide-react";

const PizzaPreview = ({ pizza }) => {
  const {
    base,
    sauce,
    cheese,
    toppings = [],
  } = pizza;

  return (
    <div className="rounded-2xl bg-[#27245B] p-6 text-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-[#27245B]">
          <Pizza size={20} />
        </div>

        <div>
          <h3 className="font-semibold">
            Your Pizza
          </h3>

          <p className="text-sm text-white/60">
            Your current selections
          </p>
        </div>
      </div>

      {/* Selections */}
      <div className="mt-6 space-y-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-white/50">
            Base
          </p>

          <p className="mt-1 text-sm">
            {base || "Not selected"}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-white/50">
            Sauce
          </p>

          <p className="mt-1 text-sm">
            {sauce || "Not selected"}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-white/50">
            Cheese
          </p>

          <p className="mt-1 text-sm">
            {cheese || "Not selected"}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-white/50">
            Toppings
          </p>

          {toppings.length > 0 ? (
            <ul className="mt-1 space-y-1">
              {toppings.map((topping) => (
                <li
                  key={topping}
                  className="text-sm"
                >
                  {topping}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-1 text-sm">
              No toppings selected
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PizzaPreview;
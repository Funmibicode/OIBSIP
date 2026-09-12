import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ShoppingBag,
} from "lucide-react";
import Button from "../ui/Button";

const PizzaCard = ({ pizza, onOrder }) => {
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <article className="overflow-visible rounded-2xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      {/* Pizza Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-slate-100">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="h-full w-full object-cover"
        />

        {/* Image Gradient */}
        {pizza.description && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        )}

        {/* Description Overlay */}
        {pizza.description && (
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md">
              <p className="text-sm leading-5 text-white">
                {pizza.description}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold text-[#172033]">
            {pizza.name}
          </h3>

          <span className="shrink-0 text-sm font-bold text-[#27245B]">
            ₦{pizza.price.toLocaleString()}
          </span>
        </div>

        {/* Ingredients Dropdown */}
        <div className="relative mt-4">
          <button
            type="button"
            onClick={() =>
              setShowIngredients((prev) => !prev)
            }
            aria-expanded={showIngredients}
            className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#27245B] transition-colors hover:bg-slate-50"
          >
            <span>Ingredients</span>

            {showIngredients ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

          {showIngredients && (
            <div className="absolute left-0 right-0 top-full z-20 mt-2 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
              <ul className="space-y-2">
                {pizza.ingredients.map((ingredient) => (
                  <li
                    key={ingredient.id}
                    className="text-sm text-slate-500"
                  >
                    {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Order Button */}
        <Button
          type="button"
          size="md"
          className="mt-4 w-full"
          onClick={() => onOrder?.(pizza)}
        >
          <ShoppingBag size={17} className="mr-2" />
          Order Now
        </Button>
      </div>
    </article>
  );
};

export default PizzaCard;
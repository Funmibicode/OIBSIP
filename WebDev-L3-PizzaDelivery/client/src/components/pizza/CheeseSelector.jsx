import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import ingredients from "../../data/ingredients.json";

const CheeseSelector = ({
  selectedCheese,
  setSelectedCheese
}) => {
  const [isOpen, setIsOpen] = useState(false);
  

  const cheeses = ingredients.filter(
    (ingredient) => ingredient.type === "cheese"
  );

  const selectedCheeseData = cheeses.find(
    (cheese) => cheese.id === selectedCheese
  );

  return (
    <div className="rounded-2xl bg-white shadow-sm">
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <div>
          <h3 className="font-semibold text-[#172033]">
            Cheese
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {selectedCheeseData
              ? selectedCheeseData.name
              : "Choose your cheese"}
          </p>
        </div>

        {isOpen ? (
          <ChevronUp size={20} className="text-[#27245B]" />
        ) : (
          <ChevronDown size={20} className="text-[#27245B]" />
        )}
      </button>

      {/* Cheese Options */}
      {isOpen && (
        <div className="border-t border-slate-100 px-5 pb-5 pt-3">
          <div className="space-y-2">
            {cheeses.map((cheese) => (
              <label
                key={cheese.id}
                className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all ${
                  selectedCheese === cheese.id
                    ? "border-[#27245B] bg-[#27245B]/5"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="pizza-cheese"
                    value={cheese.id}
                    checked={selectedCheese === cheese.id}
                    onChange={(event) =>
                      setSelectedCheese(event.target.value)
                    }
                    className="h-4 w-4 accent-[#27245B]"
                  />

                  <span className="text-sm font-medium text-[#172033]">
                    {cheese.name}
                  </span>
                </div>

                <span className="text-sm font-semibold text-[#27245B]">
                  ₦{cheese.price.toLocaleString()}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheeseSelector;
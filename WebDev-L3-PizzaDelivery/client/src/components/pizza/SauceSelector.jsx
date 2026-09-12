import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import ingredients from "../../data/ingredients.json";

const SauceSelector = ({
  selectedSauce,
  setSelectedSauce
}) => {
  const [isOpen, setIsOpen] = useState(false);
  

  const sauces = ingredients.filter(
    (ingredient) => ingredient.type === "sauce"
  );

  const selectedSauceData = sauces.find(
    (sauce) => sauce.id === selectedSauce
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
            Sauce
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {selectedSauceData
              ? selectedSauceData.name
              : "Choose your sauce"}
          </p>
        </div>

        {isOpen ? (
          <ChevronUp size={20} className="text-[#27245B]" />
        ) : (
          <ChevronDown size={20} className="text-[#27245B]" />
        )}
      </button>

      {/* Sauce Options */}
      {isOpen && (
        <div className="border-t border-slate-100 px-5 pb-5 pt-3">
          <div className="space-y-2">
            {sauces.map((sauce) => (
              <label
                key={sauce.id}
                className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all ${
                  selectedSauce === sauce.id
                    ? "border-[#27245B] bg-[#27245B]/5"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="pizza-sauce"
                    value={sauce.id}
                    checked={selectedSauce === sauce.id}
                    onChange={(event) =>
                      setSelectedSauce(event.target.value)
                    }
                    className="h-4 w-4 accent-[#27245B]"
                  />

                  <span className="text-sm font-medium text-[#172033]">
                    {sauce.name}
                  </span>
                </div>

                <span className="text-sm font-semibold text-[#27245B]">
                  ₦{sauce.price.toLocaleString()}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SauceSelector;
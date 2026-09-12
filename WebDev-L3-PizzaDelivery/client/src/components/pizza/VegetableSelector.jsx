import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import ingredients from "../../data/ingredients.json";

const VegetableSelector = ({
  selectedVegetables,
  setSelectedVegetables
}) => {
  const [isOpen, setIsOpen] = useState(false);
  

  const vegetables = ingredients.filter(
    (ingredient) => ingredient.type === "vegetable"
  );

  const handleVegetableChange = (vegetableId) => {
    setSelectedVegetables((prev) =>
      prev.includes(vegetableId)
        ? prev.filter((id) => id !== vegetableId)
        : [...prev, vegetableId]
    );
  };

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
            Vegetables
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {selectedVegetables.length > 0
              ? `${selectedVegetables.length} selected`
              : "Choose your vegetables"}
          </p>
        </div>

        {isOpen ? (
          <ChevronUp size={20} className="text-[#27245B]" />
        ) : (
          <ChevronDown size={20} className="text-[#27245B]" />
        )}
      </button>

      {/* Vegetable Options */}
      {isOpen && (
        <div className="border-t border-slate-100 px-5 pb-5 pt-3">
          <div className="space-y-2">
            {vegetables.map((vegetable) => {
              const isSelected = selectedVegetables.includes(
                vegetable.id
              );

              return (
                <label
                  key={vegetable.id}
                  className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all ${
                    isSelected
                      ? "border-[#27245B] bg-[#27245B]/5"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      value={vegetable.id}
                      checked={isSelected}
                      onChange={() =>
                        handleVegetableChange(vegetable.id)
                      }
                      className="h-4 w-4 rounded accent-[#27245B]"
                    />

                    <span className="text-sm font-medium text-[#172033]">
                      {vegetable.name}
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-[#27245B]">
                    ₦{vegetable.price.toLocaleString()}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default VegetableSelector;
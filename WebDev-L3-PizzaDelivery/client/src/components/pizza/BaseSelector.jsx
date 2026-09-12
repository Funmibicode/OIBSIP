import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import ingredients from "../../data/ingredients.json";

const BaseSelector = ({
  selectedBase,
  setSelectedBase,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const bases = ingredients.filter(
    (ingredient) => ingredient.type === "base"
  );

  const selectedBaseData = bases.find(
    (base) => base.id === selectedBase
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
            Base
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {selectedBaseData
              ? selectedBaseData.name
              : "Choose your pizza base"}
          </p>
        </div>

        {isOpen ? (
          <ChevronUp size={20} className="text-[#27245B]" />
        ) : (
          <ChevronDown size={20} className="text-[#27245B]" />
        )}
      </button>

      {/* Options */}
      {isOpen && (
        <div className="border-t border-slate-100 px-5 pb-5 pt-3">
          <div className="space-y-2">
            {bases.map((base) => (
              <label
                key={base.id}
                className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all ${
                  selectedBase === base.id
                    ? "border-[#27245B] bg-[#27245B]/5"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="pizza-base"
                    value={base.id}
                    checked={selectedBase === base.id}
                    onChange={(event) =>
                      setSelectedBase(event.target.value)
                    }
                    className="h-4 w-4 accent-[#27245B]"
                  />

                  <span className="text-sm font-medium text-[#172033]">
                    {base.name}
                  </span>
                </div>

                <span className="text-sm font-semibold text-[#27245B]">
                  ₦{base.price.toLocaleString()}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BaseSelector;
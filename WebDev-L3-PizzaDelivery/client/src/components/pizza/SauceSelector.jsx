import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from 'react';

const SauceSelector = ({
  sauces = [],
  selectedSauce,
  setSelectedSauce,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between"
      >
        <div>
          <h2 className="text-lg font-bold text-[#172033]">
            Choose Your Sauce
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Select one sauce for your pizza.
          </p>
        </div>

        {isOpen ? (
          <ChevronUp size={20} className="text-slate-500" />
        ) : (
          <ChevronDown size={20} className="text-slate-500" />
        )}
      </button>

      {isOpen && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sauces.map((sauce) => {
            const isSelected = selectedSauce === sauce.id;

            return (
              <button
                key={sauce.id}
                type="button"
                onClick={() => setSelectedSauce(sauce.id)}
                className={`rounded-xl border p-4 text-left transition ${
                  isSelected
                    ? "border-[#27245B] bg-[#27245B]/5 ring-2 ring-[#27245B]/10"
                    : "border-slate-200 hover:border-[#27245B]/40 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#172033]">
                      {sauce.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      ₦{sauce.price.toLocaleString()}
                    </p>
                  </div>

                  {isSelected && (
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#27245B]" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SauceSelector;
import React, { useState } from 'react';
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import ingredients from "../../data/ingredients.json";
import BuilderProgress from "./BuilderProgress";
import BaseSelector from "./BaseSelector";
import SauceSelector from "./SauceSelector";
import CheeseSelector from "./CheeseSelector";
import VegetableSelector from "./VegetableSelector";
import PizzaPreview from "./PizzaPreview";
import PriceSummary from "./PriceSummary";

const PizzaBuilder = () => {
  const navigate = useNavigate();

  const [selectedBase, setSelectedBase] = useState("");
  const [selectedSauce, setSelectedSauce] = useState("");
  const [selectedCheese, setSelectedCheese] = useState("");
  const [selectedVegetables, setSelectedVegetables] = useState([]);

  const steps = [
    { id: "base", label: "Base" },
    { id: "sauce", label: "Sauce" },
    { id: "cheese", label: "Cheese" },
    { id: "vegetables", label: "Toppings" },
  ];

  const completedSteps = [];

  if (selectedBase) {
    completedSteps.push("base");
  }

  if (selectedSauce) {
    completedSteps.push("sauce");
  }

  if (selectedCheese) {
    completedSteps.push("cheese");
  }

  if (selectedVegetables.length > 0) {
    completedSteps.push("vegetables");
  }

  const base = ingredients.find(
    (ingredient) => ingredient.id === selectedBase
  );

  const sauce = ingredients.find(
    (ingredient) => ingredient.id === selectedSauce
  );

  const cheese = ingredients.find(
    (ingredient) => ingredient.id === selectedCheese
  );

  const vegetables = ingredients.filter((ingredient) =>
    selectedVegetables.includes(ingredient.id)
  );

  const selectedPizza = {
    base: base?.name || "",
    sauce: sauce?.name || "",
    cheese: cheese?.name || "",
    toppings: vegetables.map((vegetable) => vegetable.name),
  };

  // Every builder section must be completed
  const isPizzaComplete =
    selectedBase &&
    selectedSauce &&
    selectedCheese &&
    selectedVegetables.length > 0;

  const handleContinue = () => {
  if (!isPizzaComplete) {
    return;
  }

  navigate("/checkout", {
    state: {
      type: "custom",
      pizza: selectedPizza,
      ingredients: {
        base,
        sauce,
        cheese,
        vegetables,
      },
    },
  });
};

  
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#172033] sm:text-3xl">
          Build Your Pizza
        </h1>

        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          Choose your favorite base, sauce, cheese and toppings.
        </p>
      </div>

      <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm">
        <BuilderProgress
          steps={steps}
          completedSteps={completedSteps}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          <BaseSelector
            selectedBase={selectedBase}
            setSelectedBase={setSelectedBase}
          />

          <SauceSelector
            selectedSauce={selectedSauce}
            setSelectedSauce={setSelectedSauce}
          />

          <CheeseSelector
            selectedCheese={selectedCheese}
            setSelectedCheese={setSelectedCheese}
          />

          <VegetableSelector
            selectedVegetables={selectedVegetables}
            setSelectedVegetables={setSelectedVegetables}
          />
        </div>

        <div className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <PizzaPreview pizza={selectedPizza} />

          <PriceSummary
            base={base}
            sauce={sauce}
            cheese={cheese}
            vegetables={vegetables}
          />

          {/* Continue to Checkout */}
          <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            {!isPizzaComplete && (
              <p className="mb-3 text-center text-xs text-slate-500">
                Complete all pizza selections to continue.
              </p>
            )}

            <button
              type="button"
              onClick={handleContinue}
              disabled={!isPizzaComplete}
              className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-200 ${
                isPizzaComplete
                  ? "bg-yellow-400 text-slate-950 shadow-sm hover:bg-yellow-300"
                  : "cursor-not-allowed bg-slate-100 text-slate-400"
              }`}
            >
              {isPizzaComplete ? (
                <>
                  <Check size={18} strokeWidth={2.5} />
                  Continue to Checkout
                  <ArrowRight size={18} strokeWidth={2.5} />
                </>
              ) : (
                "Complete Your Pizza"
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PizzaBuilder;
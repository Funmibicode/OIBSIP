import React, { useState } from 'react';
import ingredients from "../../data/ingredients.json";
import BuilderProgress from "./BuilderProgress";
import BaseSelector from "./BaseSelector";
import SauceSelector from "./SauceSelector";
import CheeseSelector from "./CheeseSelector";
import VegetableSelector from "./VegetableSelector";
import PizzaPreview from "./PizzaPreview";
import PriceSummary from "./PriceSummary";

const PizzaBuilder = () => {
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
        </div>
      </div>
    </section>
  );
};

export default PizzaBuilder;
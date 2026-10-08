import React, { useState } from 'react';
import { ArrowRight, Check, AlertCircle, LoaderCircle } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import usePizza from "../../hooks/usePizza";
import BuilderProgress from "./BuilderProgress";
import BaseSelector from "./BaseSelector";
import SauceSelector from "./SauceSelector";
import CheeseSelector from "./CheeseSelector";
import VegetableSelector from "./VegetableSelector";
import PizzaPreview from "./PizzaPreview";
import PriceSummary from "./PriceSummary";

const PizzaBuilder = () => {
  const navigate = useNavigate();

  const {
    ingredients,
    isLoading,
    error,
    refetch,
  } = usePizza();

  const [selectedBase, setSelectedBase] = useState("");
  const [selectedSauce, setSelectedSauce] = useState("");
  const [selectedCheese, setSelectedCheese] = useState("");
  const [selectedVegetables, setSelectedVegetables] = useState([]);

  const bases = ingredients.filter(
    (ingredient) => ingredient.type === "base"
  );

  const sauces = ingredients.filter(
    (ingredient) => ingredient.type === "sauce"
  );

  const cheeses = ingredients.filter(
    (ingredient) => ingredient.type === "cheese"
  );

  const vegetables = ingredients.filter(
    (ingredient) => ingredient.type === "vegetable"
  );

  const steps = [
    { id: "base", label: "Base" },
    { id: "sauce", label: "Sauce" },
    { id: "cheese", label: "Cheese" },
    { id: "vegetables", label: "Toppings" },
  ];

  const completedSteps = [];

  if (selectedBase) completedSteps.push("base");
  if (selectedSauce) completedSteps.push("sauce");
  if (selectedCheese) completedSteps.push("cheese");
  if (selectedVegetables.length > 0) {
    completedSteps.push("vegetables");
  }

  const base = bases.find(
    (ingredient) => ingredient.id === selectedBase
  );

  const sauce = sauces.find(
    (ingredient) => ingredient.id === selectedSauce
  );

  const cheese = cheeses.find(
    (ingredient) => ingredient.id === selectedCheese
  );

  const selectedVegetableData = vegetables.filter(
    (ingredient) => selectedVegetables.includes(ingredient.id)
  );

  const selectedPizza = {
    base: base?.name || "",
    sauce: sauce?.name || "",
    cheese: cheese?.name || "",
    toppings: selectedVegetableData.map(
      (vegetable) => vegetable.name
    ),
  };

  const isPizzaComplete =
    selectedBase &&
    selectedSauce &&
    selectedCheese &&
    selectedVegetables.length > 0;

  const handleContinue = () => {
    if (!isPizzaComplete) return;

    navigate("/checkout", {
      state: {
        type: "custom",
        pizza: selectedPizza,
        ingredients: {
          base,
          sauce,
          cheese,
          vegetables: selectedVegetableData,
        },
      },
    });
  };

  if (isLoading) {
    return (
      <section className="flex min-h-[500px] items-center justify-center">
        <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
          <LoaderCircle
            size={21}
            className="animate-spin text-[#27245B]"
          />
          <span>Loading ingredients...</span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-[500px] items-center justify-center">
        <div className="max-w-md rounded-2xl border border-red-100 bg-white p-7 text-center shadow-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
            <AlertCircle
              size={24}
              className="text-red-500"
            />
          </div>

          <h2 className="mt-4 text-lg font-bold text-[#172033]">
            Unable to load ingredients
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {error}
          </p>

          <button
            type="button"
            onClick={refetch}
            className="mt-5 rounded-xl bg-[#27245B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#332F70]"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold text-[#27245B]">
          Custom Pizza
        </p>

        <h1 className="mt-1 text-2xl font-extrabold text-[#172033]">
          Build Your Pizza
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Choose your base, sauce, cheese, and favorite toppings.
        </p>
      </div>

      {/* Progress */}
      <BuilderProgress
        steps={steps}
        completedSteps={completedSteps}
      />

      {/* Base */}
      <BaseSelector
        bases={bases}
        selectedBase={selectedBase}
        setSelectedBase={setSelectedBase}
      />

      {/* Sauce */}
      <SauceSelector
        sauces={sauces}
        selectedSauce={selectedSauce}
        setSelectedSauce={setSelectedSauce}
      />

      {/* Cheese */}
      <CheeseSelector
        cheeses={cheeses}
        selectedCheese={selectedCheese}
        setSelectedCheese={setSelectedCheese}
      />

      {/* Vegetables */}
      <VegetableSelector
        vegetables={vegetables}
        selectedVegetables={selectedVegetables}
        setSelectedVegetables={setSelectedVegetables}
      />

      {/* Preview */}
      <PizzaPreview pizza={selectedPizza} />

      {/* Price */}
      <PriceSummary
        base={base}
        sauce={sauce}
        cheese={cheese}
        vegetables={selectedVegetableData}
        onContinue={handleContinue}
      />

      {/* Completion */}
      {isPizzaComplete && (
        <div className="flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 px-4 py-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">
            <Check size={17} className="text-green-600" />
          </div>

          <p className="text-sm font-medium text-green-700">
            Your pizza is ready. Continue to checkout.
          </p>
        </div>
      )}

      {/* Continue */}
      <div className="flex justify-end">
        <button
          type="button"
          disabled={!isPizzaComplete}
          onClick={handleContinue}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#27245B] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#332F70] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue to Checkout
          <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
};

export default PizzaBuilder;
import React, { useMemo } from 'react';
import { AlertCircle, LoaderCircle } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import usePizza from "../../hooks/usePizza";
import PizzaCard from "./PizzaCard";

const PizzaGrid = () => {
  const navigate = useNavigate();

  const { pizzas, ingredients, isLoading, error, refetch } = usePizza();

  const displayPizzas = useMemo(() => {
    const ingredientMap = new Map(
      ingredients.map((ingredient) => [ingredient.id, ingredient])
    );

    return pizzas.map((pizza) => ({
      ...pizza,
      ingredients: pizza.ingredients
        .map((ingredientId) => ingredientMap.get(ingredientId))
        .filter(Boolean),
    }));
  }, [pizzas, ingredients]);

  const handleOrder = (pizza) => {
    const base = pizza.ingredients.find((ingredient) =>
      ingredient.id.startsWith("base-")
    );

    const sauce = pizza.ingredients.find((ingredient) =>
      ingredient.id.startsWith("sauce-")
    );

    const cheese = pizza.ingredients.find((ingredient) =>
      ingredient.id.startsWith("cheese-")
    );

    const toppings = pizza.ingredients
      .filter((ingredient) =>
        ingredient.id.startsWith("vegetable-")
      )
      .map((ingredient) => ingredient.name);

    navigate("/checkout", {
      state: {
        type: "preset",
        pizza: {
          id: pizza.id,
          name: pizza.name,
          base: base?.name || "",
          sauce: sauce?.name || "",
          cheese: cheese?.name || "",
          toppings,
          image: pizza.image,
        },
        price: pizza.price,
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
          <LoaderCircle
            size={20}
            className="animate-spin text-[#27245B]"
          />
          <span>Loading pizzas...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="max-w-md rounded-2xl border border-red-100 bg-white p-6 text-center shadow-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
            <AlertCircle size={24} className="text-red-500" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-[#172033]">
            Unable to load pizzas
          </h3>

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
      </div>
    );
  }

  if (displayPizzas.length === 0) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-bold text-[#172033]">
            No pizzas available
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Check back later for available pizzas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {displayPizzas.map((pizza) => (
        <PizzaCard
          key={pizza.id}
          pizza={pizza}
          onOrder={handleOrder}
        />
      ))}
    </div>
  );
};

export default PizzaGrid;
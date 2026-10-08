import { useCallback, useEffect, useState } from "react";
import pizzaService from "../services/pizzaService";

const usePizza = () => {
  const [pizzas, setPizzas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCatalog = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");

      const [pizzaResponse, ingredientResponse] = await Promise.all([
        pizzaService.getPizzas(),
        pizzaService.getIngredients(),
      ]);

      setPizzas(pizzaResponse.pizzas);
      setIngredients(ingredientResponse.ingredients);
    } catch (error) {
      console.error("Failed to load pizza catalog:", error);

      setError(
        error.response?.data?.message ||
          "Unable to load the pizza catalog. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  return {
    pizzas,
    ingredients,
    isLoading,
    error,
    refetch: fetchCatalog,
  };
};

export default usePizza;
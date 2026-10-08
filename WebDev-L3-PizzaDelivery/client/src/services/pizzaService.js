import api from "./api";

const normalizeIngredient = (ingredient) => ({
  id: ingredient.externalId || ingredient._id,
  mongoId: ingredient._id,
  name: ingredient.name,
  type: ingredient.type,
  price: ingredient.price,
  image: ingredient.image || "",
  isAvailable: ingredient.isAvailable,
});

const normalizePizza = (pizza) => ({
  id: pizza._id,
  name: pizza.name,
  description: pizza.description || "",
  price: pizza.price,
  image: pizza.image || "",
  ingredients: pizza.ingredients || [],
  isAvailable: pizza.isAvailable,
});

const pizzaService = {
  getPizzas: async () => {
    const response = await api.get("/pizzas");

    return {
      ...response.data,
      pizzas: response.data.pizzas.map(normalizePizza),
    };
  },

  getPizzaById: async (id) => {
    const response = await api.get(`/pizzas/${id}`);

    return {
      ...response.data,
      pizza: normalizePizza(response.data.pizza),
    };
  },

  getIngredients: async () => {
    const response = await api.get("/ingredients");

    return {
      ...response.data,
      ingredients: response.data.ingredients.map(normalizeIngredient),
    };
  },
};

export default pizzaService;
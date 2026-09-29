import { useNavigate } from 'react-router-dom';
import pizzas from "../../data/pizzas.json";
import PizzaCard from "./PizzaCard";

const PizzaGrid = () => {
  const navigate = useNavigate();

  const handleOrder = (pizza) => {
    const base = pizza.ingredients.find(
      (ingredient) => ingredient.id.startsWith("base-")
    );

    const sauce = pizza.ingredients.find(
      (ingredient) => ingredient.id.startsWith("sauce-")
    );

    const cheese = pizza.ingredients.find(
      (ingredient) => ingredient.id.startsWith("cheese-")
    );

    const toppings = pizza.ingredients
      .filter((ingredient) => ingredient.id.startsWith("vegetable-"))
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

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pizzas.map((pizza) => (
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
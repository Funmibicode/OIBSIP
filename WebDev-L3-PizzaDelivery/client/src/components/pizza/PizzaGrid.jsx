import pizzas from "../../data/pizzas.json";
import PizzaCard from "./PizzaCard";

const PizzaGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pizzas.map((pizza) => (
        <PizzaCard
          key={pizza.id}
          pizza={pizza}
        />
      ))}
    </div>
  );
};

export default PizzaGrid;
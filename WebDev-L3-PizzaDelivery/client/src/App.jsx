import PizzaBuilder from "./components/pizza/PizzaBuilder";

import PizzaGrid from "./components/pizza/PizzaGrid";


const App = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <PizzaBuilder />

      <div className="min-h-screen bg-[#F8F9FF]">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#172033] sm:text-3xl">
            Our Pizzas
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Choose from our selection of delicious pizzas.
          </p>
        </div>

        <PizzaGrid />
      </div>
    </div>
  
      
    </div>
  );
};

export default App;

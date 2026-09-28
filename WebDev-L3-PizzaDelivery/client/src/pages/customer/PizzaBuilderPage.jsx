import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from 'react-router-dom';
import CustomerLayout from "../../components/layout/CustomerLayout";
import PizzaBuilder from "../../components/pizza/PizzaBuilder";

const PizzaBuilderPage = () => {
  return (
    <CustomerLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              to="/dashboard"
              className="mb-3 inline-flex items-center text-sm font-medium text-slate-500 transition hover:text-[#27245B]"
            >
              <ArrowLeft size={16} className="mr-1.5" />
              Back to Dashboard
            </Link>

            <h1 className="text-2xl font-extrabold text-[#172033] sm:text-3xl">
              Build Your Pizza
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Customize every part of your pizza and make it exactly how you
              want it.
            </p>
          </div>

          <Link
            to="/orders"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#27245B] transition hover:bg-slate-50 sm:self-auto"
          >
            <ShoppingBag size={17} />
            My Orders
          </Link>
        </div>

        {/* Builder */}
        <PizzaBuilder />
      </div>
    </CustomerLayout>
  );
};

export default PizzaBuilderPage;
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Pizza,
  Star,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import PublicNavbar from "../../components/layout/PublicNavbar";
import PublicFooter from "../../components/layout/PublicFooter";
import PizzaGrid from "../../components/pizza/PizzaGrid";
import Button from "../../components/ui/Button";

import pizzaSlice from "../../assets/images/pizza-slice.jpg";
import pizzaBackground from "../../assets/images/pizza-background.jpg";



const Home = () => {
  const features = [
    {
      icon: Pizza,
      title: "Choose Your Pizza",
      description:
        "Pick from our delicious varieties or create a pizza exactly the way you want it.",
    },
    {
      icon: Clock,
      title: "Fast Preparation",
      description:
        "Our kitchen gets your order ready quickly so you spend less time waiting.",
    },
    {
      icon: CheckCircle,
      title: "Track Your Order",
      description:
        "Follow your order from the kitchen to your doorstep in real time.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <PublicNavbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.04] lg:opacity-[0.5]"
            style={{
              backgroundImage: `url(${pizzaBackground})`,
            }}
          />

          
          <div className="absolute inset-0 bg-white/70" />

          {/* Hero Content */}
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            {/* Hero Text */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#27245B]/5 px-4 py-2 text-sm font-semibold text-[#27245B]">
                <Pizza size={16} strokeWidth={2.2} />
                Freshly made, just for you
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-[#172033] sm:text-5xl lg:text-6xl">
                Your perfect pizza is just a{" "}
                <span className="text-[#27245B]">click away.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                Order your favorite pizza, customize every detail, and get it
                delivered straight to your doorstep.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/order-pizza">
                  <Button size="lg" className="w-full sm:w-auto">
                    Order Pizza
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>

                <a href="#menu">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Explore Menu
                  </Button>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  Fresh ingredients
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  Easy ordering
                </span>
              </div>
            </div>

            {/* Hero Pizza Visual */}
            <div className="relative">
              <div className="relative mx-auto flex aspect-square max-w-lg items-center justify-center rounded-[3rem] bg-[#27245B] p-8">
                {/* Rating Card */}
                <div className="absolute -right-4 top-8 hidden rounded-2xl bg-white px-5 py-4 shadow-xl sm:block">
                  <p className="text-xs font-medium text-slate-400">
                    Customer rating
                  </p>

                  <p className="mt-1 flex items-center gap-1 font-bold text-[#172033]">
                    <Star
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    4.9 / 5
                  </p>
                </div>

                {/* Pizza */}
                <div className="flex h-64 w-64 items-center justify-center rounded-full bg-yellow-400 shadow-2xl sm:h-80 sm:w-80">
                  <img
                    src={pizzaSlice}
                    alt="Fresh pizza slice"
                    className="w-48 object-contain sm:w-60"
                  />
                </div>

                {/* Delivery Card */}
                <div className="absolute -bottom-5 left-6 rounded-2xl bg-white px-5 py-4 shadow-xl">
                  <p className="text-xs font-medium text-slate-400">
                    Delivery
                  </p>

                  <p className="mt-1 flex items-center gap-1.5 font-bold text-[#172033]">
                    Fast & fresh
                    <TrendingUp
                      size={16}
                      strokeWidth={2.2}
                      className="text-green-500"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section
          id="menu"
          className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"
        >
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#27245B]">
                Our Menu
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#172033]">
                Popular pizzas
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Something delicious is waiting for you. Explore some of our
                most loved pizzas.
              </p>
            </div>

            <Link
              to="/order-pizza"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#27245B] transition hover:text-yellow-500"
            >
              View all
              <ArrowRight size={17} />
            </Link>
          </div>

          <PizzaGrid />
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-[#27245B]">
                Simple Process
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#172033]">
                Get your pizza in three steps
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                From choosing your pizza to tracking your delivery, we keep
                everything simple.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="relative rounded-2xl border border-slate-100 bg-[#F8F9FF] p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#27245B] text-white">
                      <Icon size={22} strokeWidth={2} />
                    </div>

                    <div className="mt-5">
                      <span className="text-xs font-bold text-yellow-500">
                        0{index + 1}
                      </span>

                      <h3 className="mt-1 text-lg font-bold text-[#172033]">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Custom Pizza CTA */}
        <section className="px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#27245B] px-6 py-12 sm:px-10 lg:px-16">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-wider text-yellow-400">
                  Make it yours
                </p>

                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Build your pizza exactly how you like it.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-indigo-200 sm:text-base">
                  Choose your base, sauce, cheese, and toppings. Create a
                  pizza that's completely yours.
                </p>
              </div>

              <Link to="/order-pizza" className="shrink-0">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-300"
                >
                  Build My Pizza
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
};

export default Home;
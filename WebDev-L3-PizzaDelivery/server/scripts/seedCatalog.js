import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Pizza from "../models/Pizza.js";
import Ingredient from "../models/Ingredient.js";

dotenv.config();

const ingredients = [
  {
    externalId: "base-001",
    name: "Classic Crust",
    type: "base",
    price: 1500,
    image: "/images/ingredients/classic-crust.jpg",
    isAvailable: true,
  },
  {
    externalId: "base-002",
    name: "Thin Crust",
    type: "base",
    price: 1800,
    image: "/images/ingredients/thin-crust.jpg",
    isAvailable: true,
  },
  {
    externalId: "base-003",
    name: "Cheese Burst",
    type: "base",
    price: 2500,
    image: "/images/ingredients/cheese-burst.jpg",
    isAvailable: true,
  },
  {
    externalId: "base-004",
    name: "Whole Wheat",
    type: "base",
    price: 2000,
    image: "/images/ingredients/whole-wheat.jpg",
    isAvailable: true,
  },
  {
    externalId: "base-005",
    name: "Stuffed Crust",
    type: "base",
    price: 2800,
    image: "/images/ingredients/stuffed-crust.jpg",
    isAvailable: true,
  },

  {
    externalId: "sauce-001",
    name: "Tomato Sauce",
    type: "sauce",
    price: 500,
    isAvailable: true,
  },
  {
    externalId: "sauce-002",
    name: "BBQ Sauce",
    type: "sauce",
    price: 700,
    isAvailable: true,
  },
  {
    externalId: "sauce-003",
    name: "Spicy Pepper Sauce",
    type: "sauce",
    price: 700,
    isAvailable: true,
  },
  {
    externalId: "sauce-004",
    name: "Garlic Cream",
    type: "sauce",
    price: 800,
    isAvailable: true,
  },
  {
    externalId: "sauce-005",
    name: "Peri Peri Sauce",
    type: "sauce",
    price: 800,
    isAvailable: true,
  },

  {
    externalId: "cheese-001",
    name: "Mozzarella",
    type: "cheese",
    price: 1000,
    isAvailable: true,
  },
  {
    externalId: "cheese-002",
    name: "Cheddar",
    type: "cheese",
    price: 1200,
    isAvailable: true,
  },
  {
    externalId: "cheese-003",
    name: "Parmesan",
    type: "cheese",
    price: 1400,
    isAvailable: true,
  },

  {
    externalId: "vegetable-001",
    name: "Pepperoni",
    type: "vegetable",
    price: 1200,
    isAvailable: true,
  },
  {
    externalId: "vegetable-002",
    name: "Chicken",
    type: "vegetable",
    price: 1500,
    isAvailable: true,
  },
  {
    externalId: "vegetable-003",
    name: "Onions",
    type: "vegetable",
    price: 300,
    isAvailable: true,
  },
  {
    externalId: "vegetable-004",
    name: "Green Pepper",
    type: "vegetable",
    price: 300,
    isAvailable: true,
  },
  {
    externalId: "vegetable-005",
    name: "Mushrooms",
    type: "vegetable",
    price: 400,
    isAvailable: true,
  },
  {
    externalId: "vegetable-006",
    name: "Olives",
    type: "vegetable",
    price: 350,
    isAvailable: true,
  },
  {
    externalId: "vegetable-007",
    name: "Tomatoes",
    type: "vegetable",
    price: 300,
    isAvailable: true,
  },
];

const pizzas = [
  {
    externalId: "pizza-001",
    name: "Classic Pepperoni",
    description: "Classic pepperoni with mozzarella and tomato sauce.",
    image: "/images/pizzas/pepperoni.jpg",
    category: "Classic",
    price: 6500,
    ingredients: [
      { id: "base-001", name: "Classic Crust" },
      { id: "sauce-001", name: "Tomato Sauce" },
      { id: "cheese-001", name: "Mozzarella" },
      { id: "vegetable-001", name: "Pepperoni" },
    ],
    isAvailable: true,
  },

  {
    externalId: "pizza-002",
    name: "BBQ Chicken",
    description: "Grilled chicken, mozzarella and smoky BBQ sauce.",
    image: "/images/pizzas/bbq-chicken.jpg",
    category: "Chicken",
    price: 7500,
    ingredients: [
      { id: "base-001", name: "Classic Crust" },
      { id: "sauce-002", name: "BBQ Sauce" },
      { id: "cheese-001", name: "Mozzarella" },
      { id: "vegetable-002", name: "Chicken" },
    ],
    isAvailable: true,
  },

  {
    externalId: "pizza-003",
    name: "Veggie Supreme",
    description:
      "A fresh mix of vegetables with mozzarella and tomato sauce.",
    image: "/images/pizzas/veggie-supreme.jpg",
    category: "Vegetarian",
    price: 7000,
    ingredients: [
      { id: "base-001", name: "Classic Crust" },
      { id: "sauce-001", name: "Tomato Sauce" },
      { id: "cheese-001", name: "Mozzarella" },
      { id: "vegetable-003", name: "Onions" },
      { id: "vegetable-004", name: "Green Pepper" },
      { id: "vegetable-005", name: "Mushrooms" },
    ],
    isAvailable: true,
  },

  {
    externalId: "pizza-004",
    name: "Spicy Chicken",
    description: "Spicy chicken, peppers and mozzarella with a hot sauce.",
    image: "/images/pizzas/spicy-chicken.jpg",
    category: "Spicy",
    price: 7800,
    ingredients: [
      { id: "base-002", name: "Thin Crust" },
      { id: "sauce-003", name: "Spicy Pepper Sauce" },
      { id: "cheese-001", name: "Mozzarella" },
      { id: "vegetable-002", name: "Chicken" },
      { id: "vegetable-004", name: "Green Pepper" },
    ],
    isAvailable: true,
  },
];

const seedCatalog = async () => {
  try {
    await connectDB();

    console.log("Clearing existing catalog...");

    await Ingredient.deleteMany({});
    await Pizza.deleteMany({});

    console.log("Seeding ingredients...");

    await Ingredient.insertMany(ingredients);

    console.log(`${ingredients.length} ingredients inserted.`);

    console.log("Seeding pizzas...");

    await Pizza.insertMany(pizzas);

    console.log(`${pizzas.length} pizzas inserted.`);

    console.log("Catalog seeded successfully.");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Catalog seed error:", error);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedCatalog();
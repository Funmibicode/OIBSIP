import Ingredient from "../models/Ingredient.js";

export const getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find({
      isAvailable: true,
    }).sort({ type: 1, name: 1 });

    return res.status(200).json({
      success: true,
      count: ingredients.length,
      ingredients,
    });
  } catch (error) {
    console.error("Get ingredients error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve ingredients.",
    });
  }
};
import Pizza from "../models/Pizza.js";

export const getPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find({
      isAvailable: true,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: pizzas.length,
      pizzas,
    });
  } catch (error) {
    console.error("Get pizzas error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve pizzas.",
    });
  }
};

export const getPizzaById = async (req, res) => {
  try {
    const pizza = await Pizza.findOne({
      _id: req.params.id,
      isAvailable: true,
    });

    if (!pizza) {
      return res.status(404).json({
        success: false,
        message: "Pizza not found.",
      });
    }

    return res.status(200).json({
      success: true,
      pizza,
    });
  } catch (error) {
    console.error("Get pizza error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve pizza.",
    });
  }
};
import Order from "../models/Order.js";
import Pizza from "../models/Pizza.js";


export const createOrder = async (req, res) => {
  try {
    const { items, deliveryFee = 1000 } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one order item is required.",
      });
    }

    const processedItems = [];

    for (const item of items) {
      if (!item.type || !["preset", "custom"].includes(item.type)) {
        return res.status(400).json({
          success: false,
          message: "Invalid order item type.",
        });
      }

      if (!item.name) {
        return res.status(400).json({
          success: false,
          message: "Each order item must have a name.",
        });
      }

      if (!item.price || item.price < 0) {
        return res.status(400).json({
          success: false,
          message: "Each order item must have a valid price.",
        });
      }

      processedItems.push({
        type: item.type,
        pizzaId: item.pizzaId || null,
        name: item.name,
        quantity: item.quantity || 1,
        price: item.price,
        ingredients: item.ingredients || {},
      });
    }

    const subtotal = processedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const total = subtotal + deliveryFee;

    const order = await Order.create({
      user: req.user._id,
      items: processedItems,
      subtotal,
      deliveryFee,
      total,
    });

    return res.status(201).json({
      success: true,
      message: "Order created successfully.",
      order,
    });
  } catch (error) {
    console.error("Create order error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to create order.",
    });
  }
};



export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.error("Get orders error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve your orders.",
    });
  }
};



export const getMyOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    return res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Get order error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve order.",
    });
  }
};
import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["preset", "custom"],
      required: true,
    },

    pizzaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pizza",
      default: null,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    ingredients: {
      base: {
        type: String,
        default: "",
      },

      sauce: {
        type: String,
        default: "",
      },

      cheese: {
        type: String,
        default: "",
      },

      vegetables: {
        type: [String],
        default: [],
      },
    },
  },
  {
    _id: false,
  }
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: {
      type: [orderItemSchema],
      required: true,
      validate: {
        validator: (items) => items.length > 0,
        message: "An order must contain at least one item.",
      },
    },

    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },

    deliveryFee: {
      type: Number,
      required: true,
      min: 0,
      default: 1000,
    },

    total: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: [
        "Order Received",
        "In Kitchen",
        "Sent to Delivery",
        "Delivered",
        "Cancelled",
      ],
      default: "Order Received",
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },

    paymentReference: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
import api from "./api";

const orderService = {
  createOrder: async (orderData) => {
    const response = await api.post("/orders", orderData);
    return response.data;
  },

  getMyOrders: async () => {
    const response = await api.get("/orders");
    return response.data;
  },

  getMyOrderById: async (orderId) => {
    const response = await api.get(`/orders/${orderId}`);
    return response.data;
  },
};

export default orderService;
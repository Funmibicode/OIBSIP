import api from "./api";

const adminService = {
  getOrders: async () => {
    const response = await api.get("/admin/orders");
    return response.data;
  },

  getOrderById: async (orderId) => {
    const response = await api.get(`/admin/orders/${orderId}`);
    return response.data;
  },

  updateOrderStatus: async (orderId, status) => {
    const response = await api.patch(
      `/admin/orders/${orderId}/status`,
      { status }
    );

    return response.data;
  },
};

export default adminService;
import api from "./api";

const paymentService = {
  createRazorpayOrder: async (orderId) => {
    const response = await api.post("/payments/create-order", {
      orderId,
    });

    return response.data;
  },

  verifyPayment: async (paymentData) => {
    const response = await api.post("/payments/verify", paymentData);

    return response.data;
  },
};

export default paymentService;
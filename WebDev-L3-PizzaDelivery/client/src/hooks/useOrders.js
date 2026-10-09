import { useCallback, useState } from "react";
import { useCallback, useState } from "react";
import orderService from "../services/orderService";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchOrders = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await orderService.getMyOrders();

      setOrders(response.orders || []);

      return response;
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Failed to load your orders.";

      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchOrder = useCallback(async (orderId) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await orderService.getMyOrderById(orderId);

      setOrder(response.order || null);

      return response;
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Failed to load the order.";

      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createOrder = useCallback(async (orderData) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await orderService.createOrder(orderData);

      if (response.order) {
        setOrders((previousOrders) => [
          response.order,
          ...previousOrders,
        ]);
      }

      return response;
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Failed to create your order.";

      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    orders,
    order,
    isLoading,
    error,
    fetchOrders,
    fetchOrder,
    createOrder,
  };
};

export default useOrders;
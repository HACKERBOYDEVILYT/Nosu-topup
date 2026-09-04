import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000,
});

export const topupApi = {
  health: () =>
    api.get("/topup/health"),

  getAccount: () =>
    api.get("/topup/account"),

  getGames: () =>
    api.get("/topup/games"),

  getCategories: () =>
    api.get("/topup/categories"),

  getProducts: (params = {}) =>
    api.get("/topup/products", {
      params,
    }),

  validatePlayer: (payload) =>
    api.post(
      "/topup/validate-player",
      payload
    ),

  createOrder: (payload) =>
    api.post(
      "/topup/order",
      payload
    ),

  getOrder: (orderId) =>
    api.get(
      `/topup/order/${encodeURIComponent(orderId)}`
    ),

  getOrders: (params = {}) =>
    api.get("/topup/orders", {
      params,
    }),
};

export default api;

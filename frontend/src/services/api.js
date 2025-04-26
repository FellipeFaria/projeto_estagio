import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8800",
});

export const getProduct = () => api.get("/produtos");
export const getSales = () => api.get("/vendas");

export default api;

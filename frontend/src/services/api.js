import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const getProduct = async () => await api.get("/produtos");

export const addProduct = async (data) =>
  await api.post("/produtos", data, {
    headers: { "Content-Type": "application/json" },
  });

export const editProduct = async (id, data) =>
  await api.put(`/produtos/${id}`, data, {
    headers: { "Content-Type": "application/json" },
  });

export const deleteProduct = async (id) => await api.delete(`/produtos/${id}`);

export const getSales = () => api.get("/vendas");

export default api;

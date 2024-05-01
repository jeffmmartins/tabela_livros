import axios from "axios";

export const api = axios.create({
  baseURL: "/api/livros.json",
  timeout: 8000,
});

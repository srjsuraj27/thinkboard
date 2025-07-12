import axios from "axios";

const BASE_URl =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
  baseURL: BASE_URl,
});

export default api;

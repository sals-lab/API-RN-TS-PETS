import axios from "axios";

const api = axios.create({
  baseURL: "https://pets-react-query-backend.eapi.joincoded.com",
});

export default api;

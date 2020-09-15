import axios from "axios";

const api = axios.create({
  baseURL: "https://research.jorgehabib.com/",
});

export default api;

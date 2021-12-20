import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_API_URL === "dev"
    ? "http://localhost:4002"
    : "https://repo-provas-bitt.herokuapp.com";
const axiosBase = axios.create({
  baseURL: BASE_URL,
});
export default axiosBase;

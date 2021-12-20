import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_API_URL === "prod"
    ? "https://repo-provas-bitt.herokuapp.com"
    : "http://localhost:4002";
const axiosBase = axios.create({
  baseURL: BASE_URL,
});
export default axiosBase;

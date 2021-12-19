import axios from "axios";

const axiosBase = axios.create({
	baseURL: "http://localhost:4002/",
});

export default axiosBase;

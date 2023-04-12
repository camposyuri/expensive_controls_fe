import axios from "axios";

const url = "https://expensive-control-api.onrender.com";

axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

const api = axios.create({
	baseURL: url,
	responseType: "json",
});

export default api;

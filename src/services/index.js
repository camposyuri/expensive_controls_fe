import axios from "axios";

const instance = {
	local: process.env.NODE_ENV !== "production",
};

const url = instance.local
	? process.env.REACT_APP_API_URL_LOCAL
	: process.env.REACT_APP_API_URL_PROD;

axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

const api = axios.create({
	baseURL: url,
	responseType: "json",
});

export default api;

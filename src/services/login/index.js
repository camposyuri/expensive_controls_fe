import api from "..";

const signin = async (data) => {
	const response = await api.post("/signin", data);
	return response.data;
};

export { signin };

import api from "..";

const signin = async (data) => {
	try {
		const response = await api.post("/signin", data);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const signup = async (data) => {
	try {
		const response = await api.post("/signup", data);

		if (response.status === 200) return response.data;
	} catch (error) {
		if (error.response.data) return 400;
		throw new Error(error);
	}
};

export { signin, signup };

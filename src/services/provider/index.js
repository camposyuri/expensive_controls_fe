import api from "..";

const getProvider = async () => {
	try {
		const response = await api.get("/provider");

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

export { getProvider };

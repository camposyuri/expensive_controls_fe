import api from "..";

const getPerson = async () => {
	try {
		const response = await api.get("/person");

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

export { getPerson };

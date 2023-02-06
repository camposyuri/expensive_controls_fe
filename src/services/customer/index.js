import api from "..";

const getCustomer = async () => {
	try {
		const response = await api.get("/customer");

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

export { getCustomer };

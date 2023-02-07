import api from "..";

const getAccount = async () => {
	try {
		const response = await api.get("/account");

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

export { getAccount };

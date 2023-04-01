import api from "..";

const getAccount = async () => {
	try {
		const response = await api.get("/account");

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const getAccountById = async (id) => {
	try {
		const response = await api.get(`/account/${id}`);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const getAccountType = async () => {
	try {
		const response = await api.get("/account-type");

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const getAccountClassification = async () => {
	try {
		const response = await api.get("/account-classification");

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const postAccount = async (data) => {
	try {
		const response = await api.post("/account", data);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const putAccount = async (id, data) => {
	try {
		const response = await api.put(`/account/${id}`, data);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

export {
	getAccount,
	getAccountType,
	getAccountClassification,
	postAccount,
	putAccount,
	getAccountById,
};

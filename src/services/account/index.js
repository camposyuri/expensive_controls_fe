import api from "..";

const getAccount = async () => {
	try {
		const response = await api.get("/account");

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

export { getAccount, getAccountType, getAccountClassification };

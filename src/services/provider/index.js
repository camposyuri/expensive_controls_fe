import api from "..";

const getProvider = async () => {
	try {
		const response = await api.get("/provider");

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const postProvider = async (data) => {
	try {
		const response = await api.post("/provider", data);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const getProviderById = async (id) => {
	try {
		const response = await api.get(`/provider/${id}`);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const putProvider = async (id, data) => {
	try {
		const response = await api.put(`/provider/${id}`, data);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

export { getProvider, postProvider, putProvider, getProviderById };

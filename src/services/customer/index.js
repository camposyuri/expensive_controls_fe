import api from "..";

const getCustomer = async () => {
	try {
		const response = await api.get("/customer");

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const postCustomer = async (data) => {
	try {
		const response = await api.post("/customer", data);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const getCustomerById = async (id) => {
	try {
		const response = await api.get(`/customer/${id}`);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const putCustomer = async (id, data) => {
	try {
		const response = await api.put(`/customer/${id}`, data);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

export { getCustomer, postCustomer, getCustomerById, putCustomer };

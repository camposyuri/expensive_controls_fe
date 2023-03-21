import api from "..";

const getPerson = async () => {
	try {
		const response = await api.get("/person");

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const postPerson = async (data) => {
	try {
		const response = await api.post("/person", data);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const putPerson = async (id, data) => {
	try {
		const response = await api.put(`/person/${id}`, data);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const getPersonById = async (id) => {
	try {
		const response = await api.get(`/person/${id}`);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

export { getPerson, postPerson, getPersonById, putPerson };

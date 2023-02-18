import api from "..";

const getUsers = async () => {
	try {
		const response = await api.get("/users");

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const postUsers = async (data) => {
	try {
		const response = await api.post("/users", data);

		if (response.status === 200) return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

export { getUsers, postUsers };

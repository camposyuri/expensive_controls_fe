import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../../services/user";
import getColumnsWithActions from "../../../utils/interfaceFactory/getColumnsWithActions";
import columnsInitial from "./columns";

const utils = () => {
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pageSize, setPageSize] = useState(5);
	const [page, setPage] = useState(0);

	const navigate = useNavigate();

	const columns = getColumnsWithActions(columnsInitial, {
		edit({ id }) {
			navigate(String(id));
		},
	});

	const getUserList = async () => {
		setLoading(true);
		try {
			const { results } = await getUsers();
			const rows = results
				.map(({ status, admin, ...rest }) => ({
					status: status ? "ATIVO" : "INATIVO",
					admin: admin ? "VERDADEIRO" : "FALSO",
					...rest,
				}))
				.sort((a, b) => a.id - b.id);

			setUser(rows);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return {
		user,
		page,
		columns,
		loading,
		pageSize,
		setPage,
		setPageSize,
		navigate,
		getUserList,
	};
};
export default utils;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPerson } from "../../../services/person";
import getColumnsWithActions from "../../../utils/interfaceFactory/getColumnsWithActions";
import columnsInitial from "./columns";

const utils = () => {
	const [person, setPerson] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pageSize, setPageSize] = useState(5);
	const [page, setPage] = useState(0);

	const navigate = useNavigate();

	const columns = getColumnsWithActions(columnsInitial, {
		edit({ id }) {
			navigate(String(id));
		},
	});

	const getPersonList = async () => {
		setLoading(true);
		try {
			const { results } = await getPerson();
			const rows = results
				.map(({ status, admin, ...rest }) => ({
					status: status ? "ATIVO" : "INATIVO",
					admin: admin ? "VERDADEIRO" : "FALSO",
					...rest,
				}))
				.sort((a, b) => a.id - b.id);

			setPerson(rows);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return {
		person,
		page,
		columns,
		loading,
		pageSize,
		setPage,
		setPageSize,
		navigate,
		getPersonList,
	};
};
export default utils;

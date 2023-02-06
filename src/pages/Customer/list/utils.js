import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCustomer } from "../../../services/customer";
import getColumnsWithActions from "../../../utils/interfaceFactory/getColumnsWithActions";
import columnsInitial from "./columns";

const utils = () => {
	const [customer, setCustomer] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pageSize, setPageSize] = useState(5);
	const [page, setPage] = useState(0);

	const navigate = useNavigate();

	const columns = getColumnsWithActions(columnsInitial, {
		edit({ id }) {
			navigate(String(id));
		},
	});

	const getCustomerList = async () => {
		setLoading(true);
		try {
			const { results } = await getCustomer();
			const rows = results
				.map(({ status, admin, ...rest }) => ({
					status: status ? "ATIVO" : "INATIVO",
					admin: admin ? "VERDADEIRO" : "FALSO",
					...rest,
				}))
				.sort((a, b) => a.id - b.id);

			setCustomer(rows);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return {
		customer,
		page,
		columns,
		loading,
		pageSize,
		setPage,
		setPageSize,
		navigate,
		getCustomerList,
	};
};
export default utils;

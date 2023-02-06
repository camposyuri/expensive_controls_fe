import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProvider } from "../../../services/provider";
import getColumnsWithActions from "../../../utils/interfaceFactory/getColumnsWithActions";
import columnsInitial from "./columns";

const utils = () => {
	const [provider, setProvider] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pageSize, setPageSize] = useState(5);
	const [page, setPage] = useState(0);

	const navigate = useNavigate();

	const columns = getColumnsWithActions(columnsInitial, {
		edit({ id }) {
			navigate(String(id));
		},
	});

	const getProviderList = async () => {
		setLoading(true);
		try {
			const { results } = await getProvider();
			const rows = results
				.map(({ status, admin, ...rest }) => ({
					status: status ? "ATIVO" : "INATIVO",
					admin: admin ? "VERDADEIRO" : "FALSO",
					...rest,
				}))
				.sort((a, b) => a.id - b.id);

			setProvider(rows);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return {
		provider,
		page,
		columns,
		loading,
		pageSize,
		setPage,
		setPageSize,
		navigate,
		getProviderList,
	};
};
export default utils;

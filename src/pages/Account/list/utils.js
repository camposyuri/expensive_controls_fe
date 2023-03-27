import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAccount } from "../../../services/account";
import getColumnsWithActions from "../../../utils/interfaceFactory/getColumnsWithActions";
import columnsInitial from "./columns";

const utils = () => {
	const [account, setAccount] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pageSize, setPageSize] = useState(5);
	const [page, setPage] = useState(0);

	const navigate = useNavigate();

	const columns = getColumnsWithActions(columnsInitial, {
		edit({ id }) {
			navigate(String(id));
		},
	});

	const getAccountList = async () => {
		setLoading(true);
		try {
			const { results } = await getAccount();
			console.log(results);
			const rows = results
				.map(({ status, admin, ...rest }) => ({
					status: status ? "ATIVO" : "INATIVO",
					...rest,
				}))
				.sort((a, b) => a.id - b.id);

			setAccount(rows);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return {
		account,
		page,
		columns,
		loading,
		pageSize,
		setPage,
		setPageSize,
		navigate,
		getAccountList,
	};
};
export default utils;

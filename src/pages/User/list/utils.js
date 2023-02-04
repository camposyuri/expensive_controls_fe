import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getColumnsWithActions from "../../../utils/interfaceFactory/getColumnsWithActions";
import columnsInitial from "./columns";

const utils = () => {
	const [pageSize, setPageSize] = useState(5);
	const [page, setPage] = useState(0);

	const navigate = useNavigate();

	const columns = getColumnsWithActions(columnsInitial, {
		edit({ id }) {
			navigate(String(id));
		},
	});

	return { columns, pageSize, page, setPage, setPageSize, navigate };
};
export default utils;

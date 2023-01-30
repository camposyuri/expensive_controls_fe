import { useNavigate } from "react-router-dom";
import getColumnsWithActions from "../../../utils/interfaceFactory/getColumnsWithActions";
import columnsInitial from "./columns";

const Utils = () => {
	const navigate = useNavigate();

	const columns = getColumnsWithActions(columnsInitial, {
		edit({ id }) {
			navigate(String(id));
		},
	});

	return { columns };
};
export default Utils;

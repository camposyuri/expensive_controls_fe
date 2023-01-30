import TableGrid from "../../../components/TableGrid";
import { Container } from "./styles";
import Utils from "./utils";

const Form = () => {
	const { columns } = Utils();

	const rows = [
		{ id: 1, name: "Snow", email: "Jon", status: 35, admin: 42 },
		{ id: 2, name: "Snow", email: "Jon", status: 35, admin: 42 },
		{ id: 3, name: "Snow", email: "Jon", status: 35, admin: 42 },
		{ id: 4, name: "Snow", email: "Jon", status: 35, admin: 42 },
		{ id: 5, name: "Snow", email: "Jon", status: 35, admin: 42 },
		{ id: 6, name: "Snow", email: "Jon", status: 35, admin: 42 },
		{ id: 7, name: "Snow", email: "Jon", status: 35, admin: 42 },
	];

	return (
		<Container>
			<h1>Hello World</h1>

			<TableGrid columns={columns} rows={rows} />
		</Container>
	);
};

export default Form;

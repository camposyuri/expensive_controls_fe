import TableGrid from "../../../components/TableGrid";
import { Container } from "./styles";
import utils from "./utils";

const Form = () => {
	const { columns, page, pageSize, setPage, setPageSize } = utils();

	const rows = [
		{ id: 1, name: "Snow", email: "Jon", status: true, admin: false },
		{ id: 2, name: "Dale", email: "as", status: true, admin: false },
		{ id: 3, name: "Nelson", email: "dadas", status: false, admin: false },
		{ id: 4, name: "AOBA", email: "Joasdasn", status: false, admin: false },
		{ id: 5, name: "Vamos", email: "aad", status: false, admin: false },
		{ id: 6, name: "lá", email: "Jdddn", status: false, admin: false },
		{ id: 7, name: "Chama", email: "ffddf", status: false, admin: true },
		{ id: 8, name: "lá", email: "Jdddn", status: false, admin: false },
		{ id: 9, name: "Chama", email: "ffddf", status: false, admin: true },
		{ id: 10, name: "lá", email: "Jdddn", status: false, admin: false },
		{ id: 11, name: "Chama", email: "ffddf", status: false, admin: true },
		{ id: 12, name: "lá", email: "Jdddn", status: false, admin: false },
		{ id: 13, name: "Chama", email: "ffddf", status: false, admin: true },
	];

	return (
		<Container>
			<h1>Hello World</h1>
			<TableGrid
				page={page}
				pageSize={pageSize}
				columns={columns}
				rows={rows}
				rowHeight={52}
				headerHeight={40}
				rowsPerPageOptions={[5, 10, 20]}
				onPageChange={(newPage) => setPage(newPage)}
				onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
			/>
		</Container>
	);
};

export default Form;

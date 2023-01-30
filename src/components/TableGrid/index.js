import { DataGrid } from "@mui/x-data-grid";

import { Container } from "./styles";

const TableGrid = ({ rows, columns }) => {
	return (
		<Container>
			<DataGrid columns={columns} rows={rows} />
		</Container>
	);
};

export default TableGrid;

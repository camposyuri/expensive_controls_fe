import { DataGrid } from "@mui/x-data-grid";

const TableGrid = ({ rows, columns }) => {
	return <DataGrid columns={columns} rows={rows} />;
};

export default TableGrid;

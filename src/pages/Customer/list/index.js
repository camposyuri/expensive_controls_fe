import { useEffect } from "react";
import Button from "../../../components/Button";
import TableGrid from "../../../components/TableGrid";
import { Container, Content, Row, Title } from "./styles";
import utils from "./utils";

const List = () => {
	const {
		customer,
		page,
		columns,
		loading,
		pageSize,
		setPage,
		setPageSize,
		navigate,
		getCustomerList,
	} = utils();

	useEffect(() => {
		getCustomerList();
	}, []);

	return (
		<Container>
			<Content>
				<Row>
					<Title>Listagem de Clientes</Title>
					<Button
						label="Novo"
						width="150"
						onClick={() => navigate("/customer-form")}
					/>
				</Row>
				<TableGrid
					page={page}
					loading={loading}
					pageSize={pageSize}
					columns={columns}
					rows={customer || []}
					rowHeight={52}
					headerHeight={40}
					rowsPerPageOptions={[5, 10, 20]}
					onPageChange={(newPage) => setPage(newPage)}
					onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
					onCellDoubleClick={({ id }) => navigate(String(id))}
				/>
			</Content>
		</Container>
	);
};

export default List;

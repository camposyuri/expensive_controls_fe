import { formatDateOrEmpty, formatterMoney } from "../../../utils/format";

const columns = [
	{
		width: 100,
		field: "id",
		headerName: "Código",
		headerAlign: "left",
		disableColumnMenu: true,
	},
	{
		width: 200,
		field: "name",
		headerName: "Nome Conta",
		headerAlign: "left",
		disableColumnMenu: true,
	},
	{
		width: 200,
		field: "value",
		headerName: "Valor Conta",
		headerAlign: "left",
		disableColumnMenu: true,
		valueFormatter: ({ value }) => formatterMoney.format(Number(value)),
	},
	{
		width: 250,
		field: "expiration_date",
		headerName: "Data de Vencimento",
		headerAlign: "left",
		disableColumnMenu: true,
		valueFormatter: ({ value }) => formatDateOrEmpty(value),
	},
	{
		width: 200,
		field: "payment_date",
		headerName: "Data de Pagamento",
		headerAlign: "left",
		disableColumnMenu: true,
		valueFormatter: ({ value }) => formatDateOrEmpty(value),
	},
	{
		flex: 0.6,
		minWidth: 500,
		field: "providername",
		headerName: "Razão Social Fornecedor",
		disableColumnMenu: true,
	},
	{
		width: 200,
		field: "customername",
		headerName: "Nome Fantasia Cliente",
		align: "center",
		disableColumnMenu: true,
	},
	{
		width: 150,
		field: "personname",
		headerName: "Nome Pessoa",
		align: "center",
		disableColumnMenu: true,
	},
	{
		width: 150,
		field: "descriptionaccount",
		headerName: "Class. Conta",
		align: "left",
		disableColumnMenu: true,
	},
	{
		width: 150,
		field: "descriptiontype",
		headerName: "Tipo de Conta",
		align: "left",
		disableColumnMenu: true,
	},
	{
		width: 90,
		field: "status",
		headerName: "Status",
		align: "center",
		disableColumnMenu: true,
	},
	{
		width: 100,
		sortable: false,
		field: "actions",
		headerName: "Ação",
		headerAlign: "center",
		align: "center",
		disableColumnMenu: true,
		// a propriedade renderCell será adicionada no arquivo da tela de listagem
	},
];

export default columns;

import {
	formatCellphone,
	formatCpfCnpj,
	formatDateOrEmpty,
	formatTelephone,
} from "../../../utils/format";

const columns = [
	{
		width: 50,
		field: "id",
		headerName: "Código",
		headerAlign: "left",
		disableColumnMenu: true,
	},
	{
		flex: 0.6,
		minWidth: 300,
		field: "name",
		headerName: "Nome",
		disableColumnMenu: true,
	},
	{
		width: 150,
		field: "cpfcnpj",
		headerName: "CPF/CNPJ",
		align: "center",
		disableColumnMenu: true,
		valueFormatter: ({ value }) => formatCpfCnpj(value),
	},
	{
		width: 150,
		field: "rg",
		headerName: "RG",
		align: "left",
		disableColumnMenu: true,
	},
	{
		width: 150,
		field: "birthdate",
		headerName: "Data Nascimento",
		align: "center",
		disableColumnMenu: true,
		valueFormatter: ({ value }) => formatDateOrEmpty(value),
	},
	{
		width: 100,
		field: "typeperson",
		headerName: "Tipo Pessoa",
		align: "center",
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
		field: "telephone",
		headerName: "Telefone",
		align: "center",
		disableColumnMenu: true,
		valueFormatter: ({ value }) => formatTelephone(value),
	},
	{
		width: 100,
		field: "phone",
		headerName: "Celular",
		align: "center",
		disableColumnMenu: true,
		valueFormatter: ({ value }) => formatCellphone(value),
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

const columns = [
	{
		width: 100,
		field: "id",
		headerName: "Código",
		headerAlign: "left",
		disableColumnMenu: true,
	},
	{
		width: 300,
		field: "email",
		headerName: "Email",
		disableColumnMenu: true,
	},
	{
		width: 100,
		field: "status",
		headerName: "Status",
		align: "center",
		disableColumnMenu: true,
	},
	{
		width: 100,
		field: "admin",
		headerName: "Admin",
		align: "center",
		disableColumnMenu: true,
	},
	{
		width: 100,
		sortable: false,
		field: "actions",
		headerName: "Ação",
		headerAlign: "center",
		disableColumnMenu: true,
		// a propriedade renderCell será adicionada no arquivo da tela de listagem
	},
];

export default columns;

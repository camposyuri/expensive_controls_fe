const columns = [
	{ field: "id", headerName: "Código", width: 90 },
	{
		field: "name",
		headerName: "Nome",
		width: 150,
	},
	{
		field: "email",
		headerName: "Email",
		width: 150,
	},
	{
		field: "status",
		headerName: "Status",
		type: "number",
		width: 110,
	},
	{
		field: "admin",
		headerName: "Admin",
		type: "number",
		width: 110,
	},
];

export default columns;

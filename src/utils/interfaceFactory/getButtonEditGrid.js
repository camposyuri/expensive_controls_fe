/* eslint-disable indent */

import { Delete, EditOutlined } from "@mui/icons-material";

const getButtonEditGrid =
	({ edit, remove }) =>
	(params) => {
		// const useStyles = styled((theme) => ({
		// 	btnEditGrid: {
		// 		color: theme.palette.primary.main,
		// 		border: 0,
		// 		paddingTop: theme.spacing(1),
		// 		backgroundColor: "transparent",
		// 		cursor: "pointer",
		// 		"&:hover": {
		// 			color: "#1e1e1e",
		// 		},
		// 	},
		// }));
		// const classes = useStyles();
		return (
			<>
				{edit && (
					<button onClick={() => edit(params)}>
						<EditOutlined fontSize="small" />
					</button>
				)}
				{remove && (
					<button onClick={() => remove(params)}>
						<Delete fontSize="small" />
					</button>
				)}
			</>
		);
	};

export default getButtonEditGrid;

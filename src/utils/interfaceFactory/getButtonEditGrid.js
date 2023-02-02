/* eslint-disable indent */

import { Delete, EditOutlined } from "@mui/icons-material";
import styled from "styled-components";

const getButtonEditGrid =
	({ edit, remove }) =>
	(params) => {
		const ButtonStyle = styled.button`
			color: ${({ theme }) => theme.colors.primary.main};
			border: 0;
			padding-top: theme.spacing(1);
			background-color: transparent;
			cursor: pointer;
			&:hover {
				color: ${({ theme }) => theme.colors.primary.light};
			}
		`;

		return (
			<>
				{edit && (
					<ButtonStyle onClick={() => edit(params)}>
						<EditOutlined fontSize="small" />
					</ButtonStyle>
				)}
				{remove && (
					<ButtonStyle onClick={() => remove(params)}>
						<Delete fontSize="small" />
					</ButtonStyle>
				)}
			</>
		);
	};

export default getButtonEditGrid;

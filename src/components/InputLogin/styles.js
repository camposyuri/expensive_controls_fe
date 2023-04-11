import { TextField } from "@mui/material";
import styled from "styled-components";

export const InputStyle = styled(TextField)`
	.MuiInputBase-root {
		height: 40px;
		border-radius: 8px;
		background: ${({ theme }) => theme.colors.primary.white};
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
		outline: 0;
		padding: 10px;
	}

	.MuiInputLabel-root {
		color: #000;
		font-family: "Poppins";
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 22px;
	}
`;

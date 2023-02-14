// import Button from "@mui/material/Button";
import { Button as MuiButton } from "@mui/material";
import styled from "styled-components";

export const ButtonStyle = styled(MuiButton)`
	width: ${({ width }) => width}px;
	height: 45px;
	color: ${({ color }) => color};
`;

ButtonStyle.displayName = "ButtonStyle";

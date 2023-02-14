import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	height: calc(100vh - 160px);
	flex-wrap: wrap;
	flex-direction: row;
	flex: 1;

	@media (max-width: 768px) {
		height: 100%;
	}
`;

export const Row = styled.div`
	padding-top: 30px;
	flex-direction: row;
	flex: 1;
`;

export const ContentTitle = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 0 48px 0;
	flex-wrap: wrap;

	span {
		color: ${({ theme }) => theme.colors.primary.main};
		font-family: "Poppins";
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 18px;
	}
`;

export const StyledLink = styled(Link)`
	color: #000000;
`;

export const Icon = styled(IconButton)`
	font-size: 1rem;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	flex: 1;
	gap: 40px;
`;

export const InputCode = styled.div`
	width: 10%;
	min-width: 300px;
`;

export const InputName = styled.div`
	width: 30%;
	min-width: 300px;
`;

export const InputEmail = styled.div`
	width: 30%;
	min-width: 300px;
`;

export const InputPassword = styled.div`
	width: 20%;
	min-width: 300px;
`;

export const ContentButton = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-wrap: wrap;
	flex: 1;
	margin-top: 15px;
	gap: 20px;

	@media (max-width: 768px) {
		justify-content: center;
	}
`;

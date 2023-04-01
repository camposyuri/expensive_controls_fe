import { Grid } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.primary.main};
	font-style: normal;
	font-weight: 600;
	font-size: 1.25rem;
	line-height: 30px;
`;

export const Content = styled(Grid)`
	height: calc(100vh - 150px);

	@media (max-width: 738px) {
		padding: 41px 0px 0px 0px;
		justify-content: start;
	}
`;

export const ImageFluid = styled.img`
	max-width: 100%;
	height: auto;
`;

export const ContentRegister = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	span {
		text-align: center;
		margin: 25px;
		color: ${({ theme }) => theme.colors.primary.lighter};
		font-weight: 500;

		a {
			text-decoration: none;

			strong {
				color: ${({ theme }) => theme.colors.primary.main};
				font-weight: 500;
			}
		}
	}
`;

Container.displayName = "Container";

Title.displayName = "Title";

Content.displayName = "Content";

ImageFluid.displayName = "ImageFluid";

ContentRegister.displayName = "ContentRegister";

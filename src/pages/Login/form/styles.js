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
	/* padding: 100px; */
	/* justify-content: center; */

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

Container.displayName = "Container";

Title.displayName = "Title";

// Content.displayName = "Content";

ImageFluid.displayName = "ImageFluid";

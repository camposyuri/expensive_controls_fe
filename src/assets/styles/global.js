import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}
	body {
		background: ${({ theme }) => theme.colors.background};
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.gray[900]}
	}
	.MuiButtonBase-root.MuiButton-root {
		cursor: pointer;
		background: ${({ theme }) => theme.colors.primary.main};
		color: ${({ theme }) => theme.colors.primary.lighter};
		border: none;
		border-radius: 9px;
		transition: all 0.4s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.colors.primary.light};
		}
	}
`;

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
		color: ${({ theme }) => theme.colors.gray[900]};
	}

	a {
		text-decoration: none;
	}

	ul li {
		list-style: none;
	}

	& .MuiButtonBase-root.MuiButton-root {
		cursor: pointer;
		background-color: ${({ theme }) => theme.colors.primary.main};
		color: ${({ theme }) => theme.colors.primary.white};
		border: none;
		border-radius: 9px;
		transition: all 0.4s ease-in-out;
		font-family: "Poppins";
		font-style: normal;
		font-weight: 500;
		font-size: 1rem;
		line-height: 24px;

		&:hover {
			color: ${({ theme }) => theme.colors.primary.white};
			background-color: ${({ theme }) => theme.colors.primary.light};
		}
	}
`;

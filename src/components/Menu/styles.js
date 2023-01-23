import styled from "styled-components";

export const Container = styled.div`
	max-width: 1700px;
`;

export const Header = styled.header`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;

export const MenuUl = styled.ul`
	display: flex;

	& li {
		margin-left: 10px;
	}

	& li a {
		display: block;
		padding: 10px;
		color: #000;
	}

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.primary.main};
	font-style: normal;
	font-weight: 600;
	font-size: 1.25rem;
	line-height: 30px;
	a {
		&:visited {
			color: ${({ theme }) => theme.colors.primary.main};
		}

		&:hover {
			color: ${({ theme }) => theme.colors.primary.light};
		}
	}
`;

export const Logout = styled.span`
	color: ${({ theme }) => theme.colors.primary.main};
	font-style: normal;
	font-weight: 600;
	font-size: 1rem;
	line-height: 30px;
`;

import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	width: 100%;
	padding: 40px 0 40px;
`;

export const Content = styled.div`
	height: calc(100vh - 300px);
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	flex: 1;
	margin: 20px 0px 20px;
	justify-content: space-between;
	padding-bottom: 20px;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	margin-bottom: 5px;

	@media (min-width: 768px) {
		font-size: 2.5rem;
	}
`;

import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	width: 100%;

	& .MuiDatagrid-row {
		cursor: "default";
	}
	& .MuiDataGrid-columnHeaders {
		background-color: #c8cbd4;
	}
	& .MuiDataGrid-pinnedColumnHeaders {
		background-color: #c8cbd4;
	}
	& .MuiDataGrid-columnHeader {
		color: #000;
	}
	& .MuiDataGrid-columnHeaderTitle {
		font-weight: 800;
		font-size: 14;
		text-transform: "uppercase";
	}
	& .MuiSwitch-colorPrimary.Mui-checked {
		color: #455068 !important;
	}
	& .MuiDataGrid-iconSeparator {
		color: #dee2e6 !important;
	}
	& .MuiButton-textPrimary {
		color: #455068;
		margin: 5px 5px 5px 0px;
		&:hover {
			background-color: #c8cbd4;
		}
	}
	& .MuiDataGrid-virtualScroller::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}
	& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 10;
	}

	& .MuiButtonBase-root.MuiButton-root {
		cursor: pointer;
		background-color: initial;
		border: none;
		transition: all 0.4s ease-in-out;
		font-family: "Poppins";
		font-style: normal;
		font-weight: 500;
		font-size: 0.8rem;
		line-height: 10px;
		color: ${({ theme }) => theme.colors.primary.main};

		&:hover {
			color: ${({ theme }) => theme.colors.primary.light};
		}
	}
`;

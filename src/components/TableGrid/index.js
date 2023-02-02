import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Container } from "./styles";

const TableGrid = ({ rows, columns, ...props }) => {
	return (
		<Container>
			<DataGrid
				columns={columns}
				rows={rows}
				components={{
					Toolbar: GridToolbar,
				}}
				pagination
				disableSelectionOnClick
				{...props}
				localeText={{
					//Root
					noRowsLabel:
						"NENHUM REGISTRO ENCONTRADO COM OS PARÂMETROS INFORMADOS",
					noResultsOverlayLabel: "NENHUM RESULTADO ENCONTRADO",
					errorOverlayDefaultLabel: "UM ERRO OCORREU",

					// Columns selector toolbar button text
					toolbarColumns: "Colunas",
					toolbarColumnsLabel: "Colunas",

					// Filters toolbar button text
					toolbarFilters: "Filtros",
					toolbarFiltersLabel: "Filtros",
					toolbarFiltersTooltipHide: "Esconder Filtros",
					toolbarFiltersTooltipShow: "Mostrar Filtros",

					// Columns panel text
					columnsPanelTextFieldLabel: "Encontrar coluna",
					columnsPanelTextFieldPlaceholder: "Título coluna",
					columnsPanelShowAllButton: "Mostrar todos",
					columnsPanelHideAllButton: "Esconder todos",

					// Filter panel text
					filterPanelAddFilter: "Adicionar filtro",
					filterPanelDeleteIconLabel: "Deletar",
					filterPanelOperators: "Operando",
					filterPanelOperatorAnd: "E",
					filterPanelOperatorOr: "Ou",
					filterPanelColumns: "Colunas",
					filterPanelInputLabel: "Valores",
					filterPanelInputPlaceholder: "Valor Filtro",
					toolbarFiltersTooltipActive: (count) =>
						count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,

					// Filter operators text
					filterOperatorContains: "Contêm",
					filterOperatorEquals: "Igual á",
					filterOperatorStartsWith: "Começa com",
					filterOperatorEndsWith: "Termina com",
					filterOperatorIs: "Tem",
					filterOperatorNot: "Não tem",
					filterOperatorAfter: "Antes",
					filterOperatorOnOrAfter: "Durante ou Antes",
					filterOperatorBefore: "Depois",
					filterOperatorOnOrBefore: "Durante ou Depois",
					filterOperatorIsEmpty: "Vazio",
					filterOperatorIsNotEmpty: "Diferente de vazio",

					// Density selector toolbar button text
					toolbarDensity: "Densidade",
					toolbarDensityLabel: "Densidade",
					toolbarDensityCompact: "Compacto",
					toolbarDensityStandard: "Padrão",
					toolbarDensityComfortable: "Confortável",

					// Export selector toolbar button text
					toolbarExport: "Exportar",
					toolbarExportLabel: "Exportar",
					toolbarExportCSV: "Baixar como CSV",
					toolbarExportPrint: "Baixar como PDF",

					// Rows selected footer text
					footerRowSelected: (count) =>
						count !== 1
							? `${count.toLocaleString()} linhas selecionadas`
							: `${count.toLocaleString()} linha selecionada`,

					// Total rows footer text
					footerTotalRows: "Total de linhas:",

					//Column header text
					columnHeaderFiltersTooltipActive: (count) =>
						count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,
					columnHeaderFiltersLabel: "Mostrar filtros",
					columnHeaderSortIconLabel: "Ordenar",

					// Used core components translation keys
					MuiTablePagination: {
						labelRowsPerPage: "Linhas por páginas",
						labelDisplayedRows: ({ from, to, count }) => {
							return `${from}-${to} de ${
								count !== -1 ? count : `mais que ${to}`
							}`;
						},
					},
				}}
			/>
		</Container>
	);
};

export default TableGrid;

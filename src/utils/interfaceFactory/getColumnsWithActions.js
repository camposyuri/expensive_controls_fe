import getButtonEditGrid from "./getButtonEditGrid";

/**
 * Adiciona os botões de ação na ultima coluna
 * @param {Array} columns [{ field: "name", headerName: "Nome" }]
 * @param {Object} actionFunction {edit() {}, remove() {}}
 * @returns columns
 */
const getColumnsWithActions = (columns, actionFunction) => {
	columns = [...columns];
	const lastColumn = columns.pop();
	const columnsWithActions = [
		...columns,
		{ ...lastColumn, renderCell: getButtonEditGrid(actionFunction) },
	];
	return columnsWithActions;
};

export default getColumnsWithActions;

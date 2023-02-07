import moment from "moment";

const formatCpfCnpj = (text) => {
	const regexCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/;
	const regexCnpj = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;
	const cpfCnpj = new String(text).replace(/[^\d]/g, "");

	if (cpfCnpj.length === 11) {
		return cpfCnpj.replace(regexCpf, "$1.$2.$3-$4");
	} else {
		return cpfCnpj.replace(regexCnpj, "$1.$2.$3/$4-$5");
	}
};

const formatTelephone = (value) => {
	const regexTelefone = /(\d{2})(\d{4})(\d{4})/g;
	const telefone = String(value).replace(/[^\d]/g, "");
	return telefone.replace(regexTelefone, "($1) $2-$3");
};

const formatCellphone = (value) => {
	const regexCelular = /(\d{2})(\d{5})(\d{4})/g;
	const celular = String(value).replace(/[^\d]/g, "");
	return celular.replace(regexCelular, "($1) $2-$3");
};

// export default function functionsDate() {
// 	/**
// 	 * @param {string} value
// 	 * @returns {boolean}
// 	 */
// 	const isValid = (value) => {
// 		return moment(value).isValid();
// 	};

// 	/**
// 	 * @param {timestamp} value
// 	 * @returns {string|empty}
// 	 */
// 	const formatDateOrEmpty = (value, mask = "DD/MM/YYYY") => {
// 		return isValid(value) ? moment(value).format(mask) : "";
// 	};

// 	return {
// 		isValid,
// 		formatDateOrEmpty,
// 	};
// }

const isValid = (value) => {
	return moment(value).isValid();
};

const formatDateOrEmpty = (value, mask = "DD/MM/YYYY") => {
	return isValid(value) ? moment(value).format(mask) : "";
};

const formatterMoney = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
});

export {
	formatCpfCnpj,
	formatTelephone,
	formatCellphone,
	formatDateOrEmpty,
	formatterMoney,
};

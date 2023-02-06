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

export { formatCpfCnpj, formatTelephone, formatCellphone };

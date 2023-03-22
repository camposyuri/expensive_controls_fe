import yup from "../../../utils/validation/yup";

const schema = yup.object().shape({
	name: yup.string().required().typeError("O campo é obrigatório"),
	cpfcnpj: yup.string().required().typeError("O campo é obrigatório"),
	phone: yup.string().required().typeError("O campo é obrigatório"),
	birthdate: yup
		.date()
		.required()
		.min("1900-01-01", "Data inválida.")
		.max("4000-01-01", "Data inválida.")
		.typeError("Campo obrigatório."),

	endereco: yup.object().shape({
		zipcode: yup.string().required().typeError("O campo é obrigatório"),
		publicplace: yup.string().required().typeError("O campo é obrigatório"),
		number: yup.string().required().typeError("O campo é obrigatório"),
		county: yup.string().required().typeError("O campo é obrigatório"),
		district: yup.string().required().typeError("O campo é obrigatório"),
		uf: yup.string().required().typeError("O campo é obrigatório"),
	}),

	status: yup.boolean().default(false),
});

export default schema;

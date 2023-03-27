import yup from "../../../utils/validation/yup";

const schema = yup.object().shape({
	name: yup.string().required().typeError("O campo é obrigatório"),
	value: yup.number().min(1).required().typeError("O campo é obrigatório"),
	expiration_date: yup
		.date()
		.required()
		.min("1900-01-01", "Data inválida.")
		.max("4000-01-01", "Data inválida.")
		.typeError("Campo obrigatório."),
	payment_date: yup
		.date()
		.required()
		.min("1900-01-01", "Data inválida.")
		.max("4000-01-01", "Data inválida.")
		.typeError("Campo obrigatório."),
	status: yup.boolean().default(false),
	id_account_classification: yup.number().typeError("O campo é obrigatório"),
	id_account_type: yup
		.number()
		.integer()
		.min(1)
		.typeError("O campo é obrigatório"),
});

export default schema;

import yup from "../../../utils/validation/yup";

const schema = yup.object().shape({
	corporatename: yup.string().required().typeError("O campo é obrigatório"),
	cpfcnpj: yup.string().required().typeError("O campo é obrigatório"),
	phone: yup.string().required().typeError("O campo é obrigatório"),

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

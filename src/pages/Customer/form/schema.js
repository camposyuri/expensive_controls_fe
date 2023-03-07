import yup from "../../../utils/validation/yup";

const schema = yup.object({
	name: yup.string().required().typeError("O campo é obrigatório"),
	email: yup.string().required().email().typeError("O campo é obrigatório"),
	password: yup.string().required().typeError("O campo é obrigatório"),
	status: yup.boolean().default(false),
	admin: yup.boolean().default(false),
});

export default schema;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import useValid from "../../../hooks/useValid";
import { signup } from "../../../services/login";
import getSchemaErrors from "../../../utils/validation/getSchemaErrors";
import schema from "./schema";

const initialValues = {
	id: 0,
	name: "",
	email: "",
	password: "",
	status: true,
	admin: false,
};

const utils = () => {
	const { signIn } = useAuth();

	const [showPassword, setShowPassword] = useState(false);
	const [values, setValues] = useState({
		name: initialValues.name,
		email: initialValues.email,
		password: initialValues.password,
		status: initialValues.status,
		admin: initialValues.admin,
	});

	const [errors, setErrors] = useState({});
	const [message, setMessage] = useState({
		text: "",
		show: false,
		type: "",
	});

	const valid = useValid(schema, errors, setErrors);

	const navigate = useNavigate();

	const handleChangeValues = ({ target: { name, value } }) => {
		setValues({ ...values, [name]: value });
		valid(name, value);
	};

	const handleTogglePassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => event.preventDefault();

	const submitSignUp = async (values) => {
		try {
			await schema.validate(values, { abortEarly: false });

			await signup(values);

			const userLogin = { email: values.email, password: values.password };

			await signIn(userLogin);
		} catch (error) {
			const mappedErrors = getSchemaErrors(error);

			setErrors({
				...errors,
				...mappedErrors,
			});

			setMessage({
				text:
					error?.response?.data?.error ||
					"Erro ao logar na aplicação, tente novamente.",
				show: true,
				type: "error",
			});

			console.error(error);
		}
	};

	return {
		values,
		errors,
		message,
		showPassword,
		handleChangeValues,
		handleTogglePassword,
		handleMouseDownPassword,
		submitSignUp,
	};
};

export default utils;

import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import useValid from "../../../hooks/useValid";
import getSchemaErrors from "../../../utils/validation/getSchemaErrors";
import schema from "./schema";

const initialValues = {
	id: 0,
	email: "",
	password: "",
};

const utils = () => {
	// Hooks
	const { signIn } = useAuth();

	// Local States
	const [showPassword, setShowPassword] = useState(false);
	const [values, setValues] = useState({
		email: initialValues.email,
		password: initialValues.password,
	});

	// Messages and Errors
	const [errors, setErrors] = useState({});
	const [message, setMessage] = useState({
		text: "",
		show: false,
		type: "",
	});

	const valid = useValid(schema, errors, setErrors);

	// Functions Handlers
	const handleChangeValue = ({ target: { name, value } }) => {
		setValues({
			...values,
			[name]: value,
		});
		valid(name, value);
	};

	const handleTogglePassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	// Function API
	const submitSignin = async (values) => {
		try {
			await schema.validate(values, { abortEarly: false });

			await signIn(values);
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
			console.error(
				error?.response?.data ? `Error: ${error?.response?.data?.error}` : error
			);
		}
	};

	//Function error
	const handleCloseMessage = () => setMessage({ ...message, show: false });

	return {
		values,
		message,
		errors,
		showPassword,
		handleTogglePassword,
		handleMouseDownPassword,
		handleChangeValue,
		submitSignin,
		handleCloseMessage,
	};
};

export default utils;

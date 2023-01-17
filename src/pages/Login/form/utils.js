import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import useValid from "../../../hooks/useValid";
import schema from "./schema";

const initialValues = {
	id: 0,
	email: "",
	password: "",
};

const utils = () => {
	// Hooks
	const { signIn, isAuthenticated } = useAuth();

	const navigate = useNavigate();

	// Local States
	const [showPassword, setShowPassword] = useState(false);
	const [values, setValues] = useState({
		email: initialValues.email,
		password: initialValues.password,
	});

	// Messages and Errors
	const [errors, setErrors] = useState({});

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

			const response = await signIn(values);
			console.log(response);
			console.log(isAuthenticated);
		} catch (e) {
			console.log(e);
		}
	};

	return {
		values,
		errors,
		showPassword,
		handleTogglePassword,
		handleMouseDownPassword,
		handleChangeValue,
		submitSignin,
	};
};

export default utils;

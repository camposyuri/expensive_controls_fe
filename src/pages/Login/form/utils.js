import { useState } from "react";
import useValid from "../../../hooks/useValid";
import schema from "./schema";

const initialValues = {
	id: 0,
	email: "",
	password: "",
};

const utils = () => {
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
			[name]: value,
		});
		valid(name, value);
	};

	const handleTogglePassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return {
		values,
		errors,
		showPassword,
		handleTogglePassword,
		handleMouseDownPassword,
		handleChangeValue,
	};
};

export default utils;

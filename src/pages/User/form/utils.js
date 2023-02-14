import { useState } from "react";

const initialValues = {
	id: 0,
	name: "",
	email: "",
	password: "",
	status: true,
	admin: false,
};

const utils = () => {
	const [values, setValues] = useState({
		name: initialValues.name,
		email: initialValues.email,
		password: initialValues.password,
		status: initialValues.status,
		admin: initialValues.admin,
	});

	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState({});

	const handleTogglePassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => event.preventDefault();

	return {
		values,
		errors,
		showPassword,
		handleTogglePassword,
		handleMouseDownPassword,
	};
};

export default utils;

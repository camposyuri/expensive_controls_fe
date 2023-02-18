import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useValid from "../../../hooks/useValid";
import { postUsers } from "../../../services/user";
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
	const [values, setValues] = useState({
		name: initialValues.name,
		email: initialValues.email,
		password: initialValues.password,
		status: initialValues.status,
		admin: initialValues.admin,
	});

	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState({});

	const navigate = useNavigate();
	const valid = useValid(schema, errors, setErrors);

	const handleTogglePassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => event.preventDefault();

	const handleChangeValues = ({ target: { name, value } }) => {
		setValues({
			...values,
			[name]: value,
		});

		valid(name, value);
	};

	const handleChangeChecked = (name) => {
		setValues({
			...values,
			[name]: !values[name] ? true : false,
		});
	};

	const submitUsers = async (values) => {
		try {
			await schema.validate(values, { abortEarly: false });

			const response = await postUsers(values);

			const { idUser, ...rest } = Array.isArray(response)
				? response[0]
				: response;

			const responseUser = { id: idUser, ...rest };
			setValues(responseUser);
			setTimeout(() => {
				navigate("/user");
			}, 1000);
		} catch (error) {
			const mappedErrors = getSchemaErrors(error);

			setErrors({
				...errors,
				...mappedErrors,
			});
			console.error(error.message ? `Error: ${error.message}` : error);
		}
	};

	const handleSave = () => submitUsers(values);

	return {
		values,
		errors,
		showPassword,
		navigate,
		handleSave,
		handleChangeValues,
		handleChangeChecked,
		handleTogglePassword,
		handleMouseDownPassword,
	};
};

export default utils;

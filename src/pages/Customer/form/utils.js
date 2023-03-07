import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useValid from "../../../hooks/useValid";
import { getUsersById, postUsers, putUsers } from "../../../services/user";
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
	const { id } = useParams();

	const options = [
		{ id: 1, descricao: "PF" },
		{ id: 2, descricao: "PJ" },
	];

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

	const showOptionsDropDown = () => {
		return (options || []).map(({ id, descricao }) => ({
			value: id,
			description: descricao,
		}));
	};

	const getMotivoCliente = async () => {
		try {
			const response = await getUsersById(id);
			const { idUser, ...rest } = Array.isArray(response)
				? response[0]
				: response;

			const responseUser = { id: idUser, ...rest };
			setValues(responseUser);
		} catch (error) {
			console.error(error.message ? `Error: ${error.message}` : error);
		}
	};

	const submitUsers = async (values) => {
		try {
			await schema.validate(values, { abortEarly: false });

			const response = id
				? await putUsers(id, values)
				: await postUsers(values);

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
		getMotivoCliente,
		showOptionsDropDown,
	};
};

export default utils;

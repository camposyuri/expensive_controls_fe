import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useValid from "../../../hooks/useValid";
import { postCustomer } from "../../../services/customer";
import { getUsersById } from "../../../services/user";
import getSchemaErrors from "../../../utils/validation/getSchemaErrors";
import schema from "./schema";

const initialValues = {
	id: 0,
	corporatename: "",
	fantasyname: "",
	cpfcnpj: "",
	typeperson: "",
	telephone: "",
	phone: "",
	status: true,
	zipcode: "",
	publicplace: "",
	number: "",
	complement: "",
	county: "",
	district: "",
	uf: "",
};

const utils = () => {
	const [values, setValues] = useState({
		corporatename: initialValues.corporatename,
		fantasyname: initialValues.fantasyname,
		cpfcnpj: initialValues.cpfcnpj,
		typeperson: initialValues.typeperson,
		telephone: initialValues.telephone,
		phone: initialValues.phone,
		status: initialValues.status,
		zipcode: initialValues.zipcode,
		publicplace: initialValues.publicplace,
		number: initialValues.number,
		complement: initialValues.complement,
		county: initialValues.county,
		district: initialValues.district,
		uf: initialValues.uf,
	});

	const [errors, setErrors] = useState({});

	const navigate = useNavigate();
	const valid = useValid(schema, errors, setErrors);
	const { id } = useParams();

	const options = [
		{ id: "F", descricao: "PF" },
		{ id: "J", descricao: "PJ" },
	];

	const handleChangeValues = ({ target: { name, value } }) => {
		setValues({
			...values,
			[name]: value,
		});

		valid(name, value);
	};

	console.log(values);
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

	const submitCustomer = async (values) => {
		try {
			await schema.validate(values, { abortEarly: false });

			const response = await postCustomer(values);

			// id
			// 	? await putUsers(id, values)
			const { idCustomer, ...rest } = Array.isArray(response)
				? response[0]
				: response;

			const responseUser = { id: idCustomer, ...rest };
			setValues(responseUser);
			setTimeout(() => {
				navigate("/customer");
			}, 1000);
		} catch (error) {
			const mappedErrors = getSchemaErrors(error);
			console.log(error);
			setErrors({
				...errors,
				...mappedErrors,
			});
			console.error(error.message ? `Error: ${error.message}` : error);
		}
	};

	const handleSave = () => submitCustomer(values);

	return {
		values,
		errors,
		navigate,
		handleSave,
		handleChangeValues,
		handleChangeChecked,
		getMotivoCliente,
		showOptionsDropDown,
	};
};

export default utils;

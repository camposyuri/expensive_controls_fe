import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useValid from "../../../hooks/useValid";
import {
	getProviderById,
	postProvider,
	putProvider,
} from "../../../services/provider";
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
	endereco: {
		zipcode: "",
		publicplace: "",
		number: "",
		complement: "",
		county: "",
		district: "",
		uf: "",
	},
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
		endereco: {
			zipcode: initialValues.endereco.zipcode,
			publicplace: initialValues.endereco.publicplace,
			number: initialValues.endereco.number,
			complement: initialValues.endereco.complement,
			county: initialValues.endereco.county,
			district: initialValues.endereco.district,
			uf: initialValues.endereco.uf,
		},
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

	const handleChangeValuesAddress = ({ target: { name, value } }) => {
		setValues({
			...values,
			endereco: {
				...values.endereco,
				[name]: value,
			},
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

	const getProviderId = async () => {
		try {
			const response = await getProviderById(id);
			const { idUser, ...rest } = Array.isArray(response)
				? response[0]
				: response;

			const responseUser = { id: idUser, ...rest };
			setValues(responseUser);
		} catch (error) {
			console.error(error.message ? `Error: ${error.message}` : error);
		}
	};

	const submitProvider = async (values) => {
		try {
			await schema.validate(values, { abortEarly: false });

			const response = id
				? await putProvider(id, values)
				: await postProvider(values);

			const { idCustomer, ...rest } = Array.isArray(response)
				? response[0]
				: response;

			const responseUser = { id: idCustomer, ...rest };
			setValues(responseUser);
			setTimeout(() => {
				navigate("/provider");
			}, 500);
		} catch (error) {
			const mappedErrors = getSchemaErrors(error);
			console.log(error);

			setErrors({
				...errors,
				...errors?.endereco,
				...mappedErrors,
			});
			console.error(error.message ? `Error: ${error.message}` : error);
		}
	};

	const handleSave = () => submitProvider(values);

	return {
		values,
		errors,
		navigate,
		handleSave,
		handleChangeValues,
		handleChangeValuesAddress,
		handleChangeChecked,
		getProviderId,
		showOptionsDropDown,
	};
};

export default utils;
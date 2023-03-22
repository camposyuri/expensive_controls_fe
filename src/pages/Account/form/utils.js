import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useValid from "../../../hooks/useValid";
import {
	getAccountClassification,
	getAccountType,
} from "../../../services/account";
import { getCustomer } from "../../../services/customer";
import {
	getPerson,
	getPersonById,
	postPerson,
	putPerson,
} from "../../../services/person";
import getSchemaErrors from "../../../utils/validation/getSchemaErrors";
import schema from "./schema";

const initialValues = {
	id: 0,
	name: "",
	value: 0,
	expiration_date: null,
	payment_date: null,
	status: true,
	id_provider: 0,
	id_person: 0,
	id_customer: 0,
	id_account_classification: 0,
	id_account_type: 0,
};

const utils = () => {
	const [values, setValues] = useState({
		name: initialValues.name,
		value: initialValues.value,
		expiration_date: initialValues.expiration_date,
		payment_date: initialValues.payment_date,
		id_person: initialValues.id_person,
		id_provider: initialValues.id_provider,
		id_customer: initialValues.id_customer,
		id_account_classification: initialValues.id_account_classification,
		id_account_type: initialValues.id_account_type,
		status: initialValues.status,
	});

	const [errors, setErrors] = useState({});
	const [accountType, setAccountType] = useState([]);
	const [accountClassification, setAccountClassification] = useState([]);
	const [customer, setCustomer] = useState([]);
	const [person, setPerson] = useState([]);
	const [provider, setProvider] = useState([]);

	const navigate = useNavigate();
	const valid = useValid(schema, errors, setErrors);
	const { id } = useParams();

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

	const showOptionsDropDown = (options) => {
		return (options || []).map(({ id, description, name }) => ({
			value: id,
			description: description,
		}));
	};

	const showOptionsDropDownName = (options) => {
		return (options || []).map(({ id, name }) => ({
			value: id,
			description: name,
		}));
	};

	const showOptionsCorporateName = (options) => {
		return (options || []).map(({ id, corporatename }) => ({
			value: id,
			description: corporatename,
		}));
	};

	const currentDate = (today) => {
		const dd = String(today.getDate()).padStart(2, "0");
		const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		const yyyy = today.getFullYear();
		return `${yyyy}-${mm}-${dd}`;
	};

	const getPersonId = async () => {
		try {
			const response = await getPersonById(id);
			const { idPerson, birthdate, ...rest } = Array.isArray(response)
				? response[0]
				: response;

			const dateFormat = currentDate(new Date(birthdate));
			const responsePerson = { id: idPerson, birthdate: dateFormat, ...rest };
			setValues(responsePerson);
		} catch (error) {
			console.error(error.message ? `Error: ${error.message}` : error);
		}
	};

	const getAllAccountClassification = async () => {
		try {
			const response = await getAccountClassification();
			setAccountClassification(response.results);
		} catch (error) {
			console.error(error.message ? `Error: ${error.message}` : error);
		}
	};

	const getAllAccountType = async () => {
		try {
			const response = await getAccountType();
			setAccountType(response.results);
		} catch (error) {
			console.error(error.message ? `Error: ${error.message}` : error);
		}
	};

	const getAllPerson = async () => {
		try {
			const response = await getPerson();
			setPerson(response.results);
		} catch (error) {
			console.error(error.message ? `Error: ${error.message}` : error);
		}
	};

	const getAllCustomer = async () => {
		try {
			const response = await getCustomer();
			setPerson(response.results);
		} catch (error) {
			console.error(error.message ? `Error: ${error.message}` : error);
		}
	};

	const submitPerson = async (values) => {
		try {
			await schema.validate(values, { abortEarly: false });

			const response = id
				? await putPerson(id, values)
				: await postPerson(values);

			const { idPerson, ...rest } = Array.isArray(response)
				? response[0]
				: response;

			const responseUser = { id: idPerson, ...rest };
			setValues(responseUser);
			setTimeout(() => {
				navigate("/person");
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

	const handleSave = () => submitPerson(values);

	return {
		person,
		customer,
		provider,
		accountType,
		accountClassification,
		values,
		errors,
		navigate,
		handleSave,
		handleChangeValues,
		handleChangeValuesAddress,
		handleChangeChecked,
		getPersonId,
		showOptionsDropDown,
		showOptionsCorporateName,
		getAllAccountType,
		getAllAccountClassification,
		getAllPerson,
		getAllCustomer,
		showOptionsDropDownName,
	};
};

export default utils;

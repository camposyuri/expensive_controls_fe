import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useValid from "../../../hooks/useValid";
import { getPersonById, postPerson, putPerson } from "../../../services/person";
import { getUsers } from "../../../services/user";
import {
	formatCellphone,
	formatCpfCnpj,
	formatPhone,
	formatTelephone,
} from "../../../utils/format";
import getSchemaErrors from "../../../utils/validation/getSchemaErrors";
import schema from "./schema";

const initialValues = {
	id: 0,
	name: "",
	birthdate: null,
	cpfcnpj: "",
	rg: "",
	typeperson: "",
	telephone: "",
	phone: "",
	status: true,
	id_user: 0,
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
		name: initialValues.name,
		birthdate: initialValues.birthdate,
		cpfcnpj: initialValues.cpfcnpj,
		rg: initialValues.rg,
		typeperson: initialValues.typeperson,
		telephone: initialValues.telephone,
		phone: initialValues.phone,
		status: initialValues.status,
		id_user: initialValues.id_user,
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
	const [users, setUsers] = useState([]);

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

	const handleChangeCpfCnpj = ({ target: { name, value } }) => {
		setValues({ ...values, [name]: formatCpfCnpj(value) });
		valid(name, value);
	};

	const handleChangePhone = ({ target: { name, value } }) => {
		setValues({ ...values, [name]: formatPhone(value) });
		valid(name, value);
	};

	const showOptionsDropDown = (options) => {
		return (options || []).map(({ id, descricao, name }) => ({
			value: id,
			description: !descricao ? name : descricao,
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
			const { idPerson, birthdate, cpfcnpj, phone, telephone, ...rest } =
				Array.isArray(response) ? response[0] : response;

			const dateFormat = currentDate(new Date(birthdate));
			const formatCpf = formatCpfCnpj(cpfcnpj);
			const formatPhone = formatCellphone(phone);
			const formatTele = formatTelephone(telephone);

			const responsePerson = {
				id: idPerson,
				birthdate: dateFormat,
				cpfcnpj: formatCpf,
				phone: formatPhone,
				telephone: formatTele,
				...rest,
			};
			setValues(responsePerson);
		} catch (error) {
			console.error(error.message ? `Error: ${error.message}` : error);
		}
	};

	const getUser = async () => {
		try {
			const response = await getUsers();
			setUsers(response.results);
		} catch (error) {
			console.error(error.message ? `Error: ${error.message}` : error);
		}
	};

	const submitPerson = async (values) => {
		try {
			await schema.validate(values, { abortEarly: false });

			const newValues = {
				...values,
				cpfcnpj: values.cpfcnpj.replaceAll(/\D/g, ""),
				telephone: values.telephone.replaceAll(/\D/g, ""),
				phone: values.phone.replaceAll(/\D/g, ""),
			};

			const response = id
				? await putPerson(id, newValues)
				: await postPerson(newValues);

			const { idPerson, ...rest } = Array.isArray(response)
				? response[0]
				: response;

			const responsePerson = { id: idPerson, ...rest };
			setValues(responsePerson);
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
		users,
		values,
		errors,
		navigate,
		handleSave,
		handleChangeValues,
		handleChangeValuesAddress,
		handleChangeChecked,
		getPersonId,
		showOptionsDropDown,
		getUser,
		handleChangeCpfCnpj,
		handleChangePhone,
	};
};

export default utils;

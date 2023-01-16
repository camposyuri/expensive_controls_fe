const useValid = (schema, errors, setErrors) => {
	const valid = async (name, value) => {
		try {
			await schema.validateAt(name, { [name]: value });

			const newErrors = { ...errors };
			delete newErrors[name];
			setErrors(newErrors);
		} catch ({ path, message }) {
			setErrors({ ...errors, [path]: message });
		}
	};

	return valid;
};

export default useValid;

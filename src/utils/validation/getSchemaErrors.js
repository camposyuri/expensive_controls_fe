const getSchemaErrors = (error) => {
	if (error.name === "ValidationError" && error?.inner) {
		return error.inner.reduce(
			(acc, { path, message }) => ({ ...acc, [path]: message }),
			{}
		);
	} else {
		return {};
	}
};

export default getSchemaErrors;

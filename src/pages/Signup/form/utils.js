import { useState } from "react";

const utils = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return {
		showPassword,
		handleTogglePassword,
		handleMouseDownPassword,
	};
};

export default utils;

import { InputStyle } from "./styles";

const InputLogin = ({
	id,
	label,
	type,
	error = null,
	value,
	onChange,
	...props
}) => {
	return (
		<InputStyle
			id={id}
			type={type}
			label={label}
			value={value}
			onChange={onChange}
			variant="outlined"
			autoComplete="off"
			{...props}
			{...(error && { error: true, helperText: error })}
		/>
	);
};

export default InputLogin;

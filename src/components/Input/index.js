import { InputStyle } from "./styles";

const Input = ({
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

export default Input;

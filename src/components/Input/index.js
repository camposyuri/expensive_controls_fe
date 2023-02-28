import { InputStyle } from "./styles";

const Input = ({ id, label, error = null, value, onChange, ...props }) => {
	return (
		<InputStyle
			id={id}
			label={label}
			value={value}
			onChange={onChange}
			variant="outlined"
			{...props}
			{...(error && { error: true, helperText: error })}
		/>
	);
};

export default Input;

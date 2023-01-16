import { InputStyle } from "./styles";

const Input = ({ id, label, error = null, ...props }) => {
	return (
		<InputStyle
			id={id}
			label={label}
			variant="outlined"
			{...props}
			{...(error && { error: true, helperText: error })}
		/>
	);
};

export default Input;

import { InputStyle } from "./styles";

const Input = ({ id, label, error = null, value, onChange, ...props }) => {
	return (
		<InputStyle
			id={id}
			label={label}
			value={value}
			onChange={onChange}
			variant="outlined"
			InputLabelProps={{
				shrink: true,
			}}
			{...props}
			{...(error && { error: true, helperText: error })}
		/>
	);
};

export default Input;

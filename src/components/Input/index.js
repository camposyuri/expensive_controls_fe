import { useAuth } from "../../hooks/useAuth";
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
	const { user } = useAuth();

	return (
		<InputStyle
			id={id}
			disabled={!user.admin ? true : false}
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

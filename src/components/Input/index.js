import { InputStyle } from "./styles";

const Input = ({ id, label, ...props }) => {
	return <InputStyle id={id} label={label} variant="outlined" {...props} />;
};

export default Input;

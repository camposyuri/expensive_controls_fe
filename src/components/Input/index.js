import { TextField } from "@mui/material";

const Input = ({ id, label, ...props }) => {
	return <TextField id={id} label={label} variant="outlined" {...props} />;
};

export default Input;

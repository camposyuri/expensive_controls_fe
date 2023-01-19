import { Alert } from "@mui/material";

const AlertGeneric = (props) => {
	return <Alert elevation={6} variant="filled" {...props} />;
};

export default AlertGeneric;

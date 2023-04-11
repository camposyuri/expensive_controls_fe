import { ButtonStyle } from "./styles";

const ButtonLogin = (props) => {
	return (
		<ButtonStyle variant="contained" {...props}>
			{props.label}
		</ButtonStyle>
	);
};

export default ButtonLogin;

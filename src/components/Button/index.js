import { ButtonStyle } from "./styles";

const Button = (props) => {
	return (
		<ButtonStyle variant="contained" {...props}>
			{props.label}
		</ButtonStyle>
	);
};

export default Button;

import { useAuth } from "../../hooks/useAuth";
import { ButtonStyle } from "./styles";

const Button = (props) => {
	const { user } = useAuth();

	return (
		<ButtonStyle
			variant="contained"
			{...props}
			disabled={!user.admin ? true : false}
		>
			{props.label}
		</ButtonStyle>
	);
};

export default Button;

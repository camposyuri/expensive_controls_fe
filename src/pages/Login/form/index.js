import { Grid, Hidden } from "@mui/material";

import { Container, Content, ImageFluid, Title } from "./styles";

import login from "../../../assets/images/image-login.svg";

const Form = () => {
	return (
		<Container>
			<Title>Controle de Gastos</Title>
			<Content container direction="row">
				<Hidden smDown>
					<Grid item md={6}>
						<ImageFluid src={login} alt="Login" />
					</Grid>
				</Hidden>
				<Grid item md={6}>
					<h2>Sign in</h2>
				</Grid>
			</Content>
		</Container>
	);
};

export default Form;

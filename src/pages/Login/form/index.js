import { Grid, Hidden } from "@mui/material";

import { Content, ContentRegister, ImageFluid, Title } from "./styles";

import Input from "../../../components/Input";

import login from "../../../assets/images/image-login.svg";
import Button from "../../../components/Button";

const Form = () => {
	return (
		<Grid container>
			<Title>Controle de Gastos</Title>
			<Content
				container
				direction="row"
				alignItems="center"
				justifyContent="center"
			>
				<Hidden smDown>
					<Grid item md={6}>
						<ImageFluid src={login} alt="Login" />
					</Grid>
				</Hidden>
				<Grid item md={6}>
					<h2>Sign in</h2>
					<Grid item md={12} marginTop={5}>
						<Grid item marginBottom={3}>
							<Input id="email" name="email" label="Email" fullWidth />
						</Grid>
						<Grid item marginBottom={3}>
							<Input id="senha" name="password" label="Senha" fullWidth />
						</Grid>
					</Grid>
					<Button label="Login" fullWidth />
					<ContentRegister>
						<span>
							<strong>Cadastre-se</strong> <br /> ou continue com
						</span>
					</ContentRegister>
				</Grid>
			</Content>
		</Grid>
	);
};

export default Form;

import { Grid, Hidden, IconButton, InputAdornment } from "@mui/material";

import { Content, ContentRegister, ImageFluid, Title } from "./styles";

import Input from "../../../components/Input";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import login from "../../../assets/images/image-login.svg";
import Button from "../../../components/Button";
import utils from "./utils";

const Form = () => {
	const {
		values,
		errors,
		showPassword,
		handleChangeValue,
		handleTogglePassword,
		handleMouseDownPassword,
	} = utils();

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
							<Input
								id="email"
								name="email"
								label="Email"
								fullWidth
								required
								value={values.email}
								error={errors.email}
								onChange={handleChangeValue}
							/>
						</Grid>
						<Grid item marginBottom={3}>
							<Input
								id="senha"
								type={showPassword ? "text" : "password"}
								name="password"
								label="Senha"
								fullWidth
								required
								value={values.password}
								error={errors.password}
								onChange={handleChangeValue}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleTogglePassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
					<Button label="Login" fullWidth />
					<ContentRegister>
						<span>
							<Link to="/signup">
								<strong>Cadastre-se</strong>
							</Link>
							<br /> ou continue com
						</span>
					</ContentRegister>
				</Grid>
			</Content>
		</Grid>
	);
};

export default Form;

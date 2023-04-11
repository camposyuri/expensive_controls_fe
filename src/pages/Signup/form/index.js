import { Grid, Hidden, IconButton, InputAdornment } from "@mui/material";

import { Content, ImageFluid, Title } from "./styles";

import login from "../../../assets/images/image-login.svg";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import ButtonLogin from "../../../components/ButtonLogin";
import InputLogin from "../../../components/InputLogin";
import utils from "./utils";

const Form = () => {
	const {
		values,
		errors,
		showPassword,
		handleTogglePassword,
		handleMouseDownPassword,
		handleChangeValues,
		submitSignUp,
		navigate,
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
					<h2>Sign Up</h2>
					<Grid item md={12} marginTop={5}>
						<Grid item marginBottom={3}>
							<InputLogin
								id="name"
								name="name"
								label="Nome"
								value={values.name}
								error={errors.name}
								fullWidth
								onChange={handleChangeValues}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item marginBottom={3}>
							<InputLogin
								id="email"
								name="email"
								label="Email"
								value={values.email}
								error={errors.email}
								fullWidth
								onChange={handleChangeValues}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item marginBottom={3}>
							<InputLogin
								id="senha"
								name="password"
								label="Senha"
								value={values.password}
								error={errors.password}
								fullWidth
								type={showPassword ? "text" : "password"}
								onChange={handleChangeValues}
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
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
					</Grid>
					<div>
						<ButtonLogin
							label="Cadastrar"
							width="369"
							fullWidth
							onClick={() => submitSignUp(values)}
						/>
					</div>
				</Grid>
			</Content>
		</Grid>
	);
};

export default Form;

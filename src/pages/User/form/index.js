import { ArrowBack, Visibility, VisibilityOff } from "@mui/icons-material";
import {
	Checkbox,
	FormControlLabel,
	IconButton,
	InputAdornment,
	Switch,
} from "@mui/material";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import * as Elements from "./styles";
import utils from "./utils";

const Form = () => {
	const {
		values,
		errors,
		showPassword,
		handleMouseDownPassword,
		handleTogglePassword,
	} = utils();

	return (
		<Elements.Container>
			<Elements.Row>
				<Elements.StyledLink to="/user">
					<Elements.Icon>
						<ArrowBack />
					</Elements.Icon>
					Voltar
				</Elements.StyledLink>
				<Elements.ContentTitle>
					<h1>Cadastro de Usuário</h1>
					<span>* Campos obrigatórios</span>
				</Elements.ContentTitle>

				<Elements.Content>
					<Elements.InputCode>
						<Input
							id="id"
							name="id"
							label="Código"
							disabled
							value={values.id}
							error={errors.id}
							fullWidth
							// onChange={handleChangeValues}
						/>
					</Elements.InputCode>
					<Elements.InputName>
						<Input
							id="name"
							name="name"
							label="Nome"
							value={values.name}
							error={errors.name}
							fullWidth
							required
							// onChange={handleChangeValues}
						/>
					</Elements.InputName>
					<Elements.InputEmail>
						<Input
							id="email"
							name="email"
							label="Email"
							required
							value={values.email}
							error={errors.email}
							fullWidth
							// onChange={handleChangeValues}
						/>
					</Elements.InputEmail>

					<Elements.InputPassword>
						<Input
							id="senha"
							name="password"
							label="Senha"
							required
							value={values.password}
							error={errors.password}
							fullWidth
							type={showPassword ? "text" : "password"}
							// onChange={handleChangeValues}
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
					</Elements.InputPassword>

					<FormControlLabel
						control={<Switch defaultChecked value={values.status} />}
						label="Ativo"
					/>

					<FormControlLabel
						control={
							<Checkbox
								value={values.admin}
								checked={values.admin !== false ? true : false}
								// onChange={handleChangeChecked}
								name="administrador"
								color="primary"
							/>
						}
						label="Administrador"
					/>
				</Elements.Content>
				<Elements.ContentButton>
					<Button
						label="Cancelar"
						width="200"
						// fullWidth
						// onClick={() => su(values)}
					/>
					<Button
						label="Cadastrar"
						width="200"
						// fullWidth
						// onClick={() => submitSignUp(values)}
					/>
				</Elements.ContentButton>
			</Elements.Row>
		</Elements.Container>
	);
};

export default Form;

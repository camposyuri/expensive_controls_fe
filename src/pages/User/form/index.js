import { ArrowBack, Visibility, VisibilityOff } from "@mui/icons-material";
import {
	Checkbox,
	FormControlLabel,
	IconButton,
	InputAdornment,
	Switch,
} from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useAuth } from "../../../hooks/useAuth";
import * as Elements from "./styles";
import utils from "./utils";

const Form = () => {
	const { id } = useParams();

	const { user } = useAuth();

	const {
		values,
		errors,
		showPassword,
		navigate,
		handleSave,
		handleChangeValues,
		handleChangeChecked,
		handleMouseDownPassword,
		handleTogglePassword,
		getUserID,
	} = utils();

	useEffect(() => {
		(async () => {
			if (id) await getUserID();
		})();
	}, []);

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
							InputLabelProps={{
								shrink: true,
							}}
							value={values.id}
							fullWidth
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
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
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
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
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
							onChange={handleChangeValues}
							InputLabelProps={{
								shrink: true,
							}}
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
						control={
							<Switch
								value={values.status}
								disabled={!user.admin ? true : false}
								checked={values.status !== false ? true : false}
								name="status"
								color="primary"
								onChange={({ target: { name } }) => handleChangeChecked(name)}
							/>
						}
						label="Ativo"
					/>

					<FormControlLabel
						control={
							<Checkbox
								value={values.admin}
								checked={!values.admin ? false : true}
								onChange={({ target: { name } }) => handleChangeChecked(name)}
								name="admin"
								disabled={!user.admin ? true : false}
								color="primary"
							/>
						}
						label="Administrador"
					/>
				</Elements.Content>
				<Elements.ContentButton>
					<Button
						label="Cancelar"
						width="140"
						onClick={() => navigate("/user")}
					/>
					<Button label="Cadastrar" width="140" onClick={handleSave} />
				</Elements.ContentButton>
			</Elements.Row>
		</Elements.Container>
	);
};

export default Form;

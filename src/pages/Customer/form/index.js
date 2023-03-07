import { ArrowBack } from "@mui/icons-material";
import { FormControlLabel, Switch } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import * as Elements from "./styles";
import utils from "./utils";

const Form = () => {
	const { id } = useParams();
	const {
		values,
		errors,
		navigate,
		handleSave,
		handleChangeValues,
		handleChangeChecked,
		getMotivoCliente,
		showOptionsDropDown,
	} = utils();

	useEffect(() => {
		(async () => {
			if (id) await getMotivoCliente();
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
					<h1>Cadastro de Cliente</h1>
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
					<Elements.InputSize>
						<Input
							id="corporateReason"
							name="corporateReason"
							label="Razão Social"
							value={values.name}
							error={errors.name}
							fullWidth
							required
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>
					<Elements.InputSize>
						<Input
							id="fantasyName"
							name="fantasyName"
							label="Nome Fantasia"
							value={values.email}
							error={errors.email}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="document"
							name="document"
							label="CPF/CNPJ"
							required
							value={values.email}
							error={errors.email}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>
					<Elements.InputSize>
						<Input
							id="rg"
							name="rg"
							label="RG"
							value={values.email}
							error={errors.email}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					{/* TODO: Component select */}
					<Elements.InputSize>
						<Select
							name="codEmpresa"
							label="Tipo Pessoa"
							fullWidth
							variant="outlined"
							size="small"
							value={values.codEmpresa}
							options={showOptionsDropDown()}
							// onChange={onChangeEmpresa}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="telephone"
							name="telephone"
							label="Telefone"
							value={values.email}
							error={errors.email}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="cellphone"
							name="cellphone"
							label="Celular"
							required
							value={values.email}
							error={errors.email}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<FormControlLabel
						control={
							<Switch
								value={values.status}
								checked={values.status !== false ? true : false}
								name="status"
								color="primary"
								onChange={({ target: { name } }) => handleChangeChecked(name)}
							/>
						}
						label="Ativo"
					/>

					<Elements.InputSize>
						<Input
							id="zipcode"
							name="zipcode"
							label="CEP"
							required
							value={values.email}
							error={errors.email}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="address"
							name="address"
							label="Endereço"
							required
							value={values.email}
							error={errors.email}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="number"
							name="number"
							label="Número"
							required
							value={values.email}
							error={errors.email}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="complement"
							name="complement"
							label="Complemento"
							value={values.email}
							error={errors.email}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="county"
							name="county"
							label="Município"
							required
							value={values.email}
							error={errors.email}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="neighborhood"
							name="neighborhood"
							label="Bairro"
							required
							value={values.email}
							error={errors.email}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="uf"
							name="uf"
							label="UF"
							required
							value={values.email}
							error={errors.email}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>
				</Elements.Content>
				<Elements.ContentButton>
					<Button
						label="Cancelar"
						width="140"
						onClick={() => navigate("/customer")}
					/>
					<Button label="Cadastrar" width="140" onClick={handleSave} />
				</Elements.ContentButton>
			</Elements.Row>
		</Elements.Container>
	);
};

export default Form;

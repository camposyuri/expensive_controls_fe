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
		users,
		values,
		errors,
		navigate,
		handleSave,
		handleChangeValues,
		handleChangeValuesAddress,
		handleChangeChecked,
		getPersonId,
		showOptionsDropDown,
		getUser,
	} = utils();

	const options = [
		{ id: "F", descricao: "PF" },
		{ id: "J", descricao: "PJ" },
	];

	useEffect(() => {
		(async () => {
			if (id) await getPersonId();
		})();
	}, []);

	useEffect(() => {
		getUser();
	}, []);

	return (
		<Elements.Container>
			<Elements.Row>
				<Elements.StyledLink to="/person">
					<Elements.Icon>
						<ArrowBack />
					</Elements.Icon>
					Voltar
				</Elements.StyledLink>
				<Elements.ContentTitle>
					<h1>Cadastro de Pessoa</h1>
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
					</Elements.InputSize>
					<Elements.InputSize>
						<Input
							id="birthdate"
							name="birthdate"
							type="date"
							label="Data de Nascimento"
							value={values.birthdate}
							error={errors.birthdate}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							required
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="cpfcnpj"
							name="cpfcnpj"
							label="CPF/CNPJ"
							required
							value={values.cpfcnpj}
							error={errors.cpfcnpj}
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
							value={values.rg}
							error={errors.rg}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Select
							name="typeperson"
							label="Tipo Pessoa"
							fullWidth
							variant="outlined"
							size="small"
							value={values.typeperson}
							options={showOptionsDropDown(options)}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="telephone"
							name="telephone"
							label="Telefone"
							value={values.telephone}
							error={errors.telephone}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="phone"
							name="phone"
							label="Celular"
							required
							value={values.phone}
							error={errors.phone}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
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
					</Elements.InputSize>

					<Elements.InputSize>
						<Select
							name="id_user"
							label="Usuário"
							fullWidth
							required
							variant="outlined"
							size="small"
							value={values.id_user}
							options={showOptionsDropDown(users)}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="zipcode"
							name="zipcode"
							label="CEP"
							required
							value={values?.endereco?.zipcode}
							error={errors?.endereco?.zipcode}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValuesAddress}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="publicplace"
							name="publicplace"
							label="Endereço"
							required
							value={values?.endereco?.publicplace}
							error={errors?.endereco?.publicplace}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValuesAddress}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="number"
							name="number"
							label="Número"
							required
							value={values?.endereco?.number}
							error={errors?.endereco?.number}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValuesAddress}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="complement"
							name="complement"
							label="Complemento"
							value={values?.endereco?.complement}
							error={errors?.endereco?.complement}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValuesAddress}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="county"
							name="county"
							label="Município"
							required
							value={values?.endereco?.county}
							error={errors?.endereco?.county}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValuesAddress}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="district"
							name="district"
							label="Bairro"
							required
							value={values?.endereco?.district}
							error={errors?.endereco?.district}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValuesAddress}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="uf"
							name="uf"
							label="UF"
							required
							value={values?.endereco?.uf}
							error={errors?.endereco?.uf}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValuesAddress}
						/>
					</Elements.InputSize>
				</Elements.Content>
				<Elements.ContentButton>
					<Button
						label="Cancelar"
						width="140"
						onClick={() => navigate("/person")}
					/>
					<Button label="Cadastrar" width="140" onClick={handleSave} />
				</Elements.ContentButton>
			</Elements.Row>
		</Elements.Container>
	);
};

export default Form;

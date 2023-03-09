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
							id="corporatename"
							name="corporatename"
							label="Razão Social"
							value={values.corporatename}
							error={errors.corporatename}
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
							id="fantasyname"
							name="fantasyname"
							label="Nome Fantasia"
							value={values.fantasyname}
							error={errors.fantasyname}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
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
						<Select
							name="typeperson"
							label="Tipo Pessoa"
							fullWidth
							variant="outlined"
							size="small"
							value={values.typeperson}
							options={showOptionsDropDown()}
							onChange={handleChangeValues}
							// InputLabelProps={{
							// 	shrink: true,
							// }}
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
							value={values.zipcode}
							error={errors.zipcode}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="publicplace"
							name="publicplace"
							label="Endereço"
							required
							value={values.publicplace}
							error={errors.publicplace}
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
							value={values.number}
							error={errors.number}
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
							value={values.complement}
							error={errors.complement}
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
							value={values.county}
							error={errors.county}
							fullWidth
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Input
							id="district"
							name="district"
							label="Bairro"
							required
							value={values.district}
							error={errors.district}
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
							value={values.uf}
							error={errors.uf}
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

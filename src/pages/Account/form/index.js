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
		person,
		customer,
		provider,
		accountType,
		accountClassification,
		values,
		errors,
		navigate,
		handleSave,
		handleChangeValues,
		showOptionsCorporateName,
		showOptionsDropDownName,
		handleChangeChecked,
		getAccountId,
		showOptionsDropDown,
		getAllAccountType,
		getAllAccountClassification,
		getAllPerson,
		getAllCustomer,
		getAllProvider,
	} = utils();

	useEffect(() => {
		(async () => {
			if (id) await getAccountId();
		})();
	}, []);

	useEffect(() => {
		getAllAccountType();
		getAllAccountClassification();
		getAllPerson();
		getAllCustomer();
		getAllProvider();
	}, []);

	return (
		<Elements.Container>
			<Elements.Row>
				<Elements.StyledLink to="/account">
					<Elements.Icon>
						<ArrowBack />
					</Elements.Icon>
					Voltar
				</Elements.StyledLink>
				<Elements.ContentTitle>
					<h1>Cadastro de Conta</h1>
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
							id="value"
							name="value"
							label="Valor"
							value={values.value}
							error={errors.value}
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
							id="expiration_date"
							name="expiration_date"
							type="date"
							label="Data de Vencimento"
							value={values.expiration_date}
							error={errors.expiration_date}
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
							id="payment_date"
							name="payment_date"
							type="date"
							label="Data de Pagamento"
							value={values.payment_date}
							error={errors.payment_date}
							fullWidth
							required
							InputLabelProps={{
								shrink: true,
							}}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Select
							name="id_person"
							label="Pessoa"
							fullWidth
							variant="outlined"
							size="small"
							value={values.id_person}
							options={showOptionsDropDownName(person)}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Select
							name="id_provider"
							label="Fornecedor"
							fullWidth
							variant="outlined"
							size="small"
							value={values.id_provider}
							options={showOptionsCorporateName(provider)}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Select
							name="id_customer"
							label="Cliente"
							fullWidth
							variant="outlined"
							size="small"
							value={values.id_customer}
							options={showOptionsCorporateName(customer)}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Select
							name="id_account_classification"
							label="Class. Conta"
							fullWidth
							variant="outlined"
							size="small"
							required
							value={values.id_account_classification}
							options={showOptionsDropDown(accountClassification)}
							onChange={handleChangeValues}
						/>
					</Elements.InputSize>

					<Elements.InputSize>
						<Select
							name="id_account_type"
							label="Tipo Conta"
							fullWidth
							variant="outlined"
							size="small"
							required
							value={values.id_account_type}
							options={showOptionsDropDown(accountType)}
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
				</Elements.Content>
				<Elements.ContentButton>
					<Button
						label="Cancelar"
						width="140"
						onClick={() => navigate("/account")}
					/>
					<Button label="Cadastrar" width="140" onClick={handleSave} />
				</Elements.ContentButton>
			</Elements.Row>
		</Elements.Container>
	);
};

export default Form;

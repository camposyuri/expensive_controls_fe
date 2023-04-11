import {
	FormHelperText,
	InputLabel as MInputLabel,
	Select as MSelect,
	MenuItem,
} from "@mui/material";

import { useAuth } from "../../hooks/useAuth";
import * as Elements from "./styles";

const Select = ({
	id,
	name,
	value,
	options,
	onChange,
	labelId,
	label,
	fullWidth,
	variant,
	size,
	required,
	error,
	helperText,
	disabled,
	InputLabelProps,
	...rest
}) => {
	const { user } = useAuth();

	const propsFormControl = {
		fullWidth,
		variant,
		size,
		required,
		error,
	};

	const propsSelect = {
		id,
		name,
		value,
		onChange,
		labelId,
		disabled,
		label,
		size,
	};

	const propsFormHelper = {
		helperText,
	};

	return (
		<Elements.FormControlStyle {...propsFormControl}>
			<MInputLabel
				id={propsSelect.labelId}
				disabled={!user.admin ? true : false}
			>
				{label}
			</MInputLabel>
			<MSelect {...propsSelect} disabled={!user.admin ? true : false}>
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.description}
					</MenuItem>
				))}
			</MSelect>
			<FormHelperText>{propsFormHelper.helperText}</FormHelperText>
		</Elements.FormControlStyle>
	);
};

export default Select;

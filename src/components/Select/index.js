import {
	FormHelperText,
	InputLabel as MInputLabel,
	MenuItem,
	Select as MSelect,
} from "@mui/material";

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
			<MInputLabel id={propsSelect.labelId}>{label}</MInputLabel>
			<MSelect {...propsSelect}>
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

import React from "react";
import { FieldProps, getIn } from "formik";
import {
  Autocomplete,
  AutocompleteProps,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextFieldProps,
  UseAutocompleteProps,
} from "@mui/material";
import { SelectItem } from "../../hooks/Steps/mortgageFormModel";

const SelectField: React.FC<FieldProps & TextFieldProps & SelectItem[]> = (
  props
) => {
  const isTouched = getIn(props.form.touched, props.field.name);
  const errorMessage = getIn(props.form.errors, props.field.name);
  const {
    error,
    helperText,
    field,
    form,
    label,
    value,
    onInputChange,
    inputValue,
    data,
    onChange,
    ...rest
  } = props;

  return (
    <Autocomplete
      disablePortal
      value={value}
      options={data}
      onChange={onChange}
      onInputChange={onInputChange}
      inputValue={inputValue}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          error={error ?? Boolean(isTouched && errorMessage)}
          helperText={
            helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
          }
          {...rest}
          {...field}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};

export default SelectField;

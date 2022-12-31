import React from "react";
import { FieldProps, getIn } from "formik";
import {
  Autocomplete,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { SelectItem } from "../../hooks/Steps/mortgageFormModel";
import useStepTwoForm from "../../hooks/Steps/useStepTwoForm";

const SelectField: React.FC<FieldProps & TextFieldProps & SelectItem[]> = (
  props
) => {
  const { _handleState } = useStepTwoForm();
  const isTouched = getIn(props.form.touched, props.field.name);
  const errorMessage = getIn(props.form.errors, props.field.name);
  const { error, helperText, field, form, label, data, ...rest } = props;

  return (
    <Autocomplete
      disablePortal
      options={data}
      onChange={_handleState}
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

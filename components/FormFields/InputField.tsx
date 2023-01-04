import React from "react";
import { FieldProps, getIn } from "formik";
import { TextField, TextFieldProps } from "@mui/material";

const InputField: React.FC<FieldProps & TextFieldProps> = (props) => {
  const isTouched = getIn(props.form.touched, props.field.name);
  const errorMessage = getIn(props.form.errors, props.field.name);
  const { error, helperText, field, form, ...rest } = props;

  return (
    <TextField
      variant="outlined"
      error={error ?? Boolean(isTouched && errorMessage)}
      helperText={
        helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
      }
      InputProps={{
        className: "bg-white",
      }}
      {...rest}
      {...field}
    />
  );
};

export default InputField;

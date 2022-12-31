import React from "react";
import { FieldProps, getIn } from "formik";
import { TextField, TextFieldProps } from "@mui/material";
import { NumericFormat, NumericFormatProps } from "react-number-format";

const NumberField: React.FC<
  FieldProps & TextFieldProps & NumericFormatProps
> = (props) => {
  const isTouched = getIn(props.form.touched, props.field.name);
  const errorMessage = getIn(props.form.errors, props.field.name);
  const { error, helperText, field, form, ...rest } = props;

  return (
    <NumericFormat
      // @ts-ignore
      customInput={TextField}
      variant="outlined"
      error={error ?? Boolean(isTouched && errorMessage)}
      helperText={
        helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
      }
      {...rest}
      {...field}
    />
  );
};

export default NumberField;

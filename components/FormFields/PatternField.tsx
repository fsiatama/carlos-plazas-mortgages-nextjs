import React from "react";
import { FieldProps, getIn } from "formik";
import { TextField, TextFieldProps } from "@mui/material";
import { PatternFormat, PatternFormatProps } from "react-number-format";

const PatternField: React.FC<
  FieldProps & TextFieldProps & PatternFormatProps
> = (props) => {
  const isTouched = getIn(props.form.touched, props.field.name);
  const errorMessage = getIn(props.form.errors, props.field.name);
  const { format, error, helperText, field, form, ...rest } = props;

  return (
    <PatternFormat
      format={format}
      allowEmptyFormatting
      mask="_"
      variant="outlined"
      // @ts-ignore
      customInput={TextField}
      error={error ?? Boolean(isTouched && errorMessage)}
      helperText={
        helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
      }
      {...rest}
      {...field}
    />
  );
};

export default PatternField;

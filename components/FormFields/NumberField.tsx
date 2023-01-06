import React from "react";
import { FieldProps, getIn } from "formik";
import { TextField, TextFieldProps } from "@mui/material";
import NumberFormat, {
  InputAttributes,
  NumericFormat,
  NumericFormatProps,
} from "react-number-format";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  prefix: string;
  allowedDecimalSeparators?: boolean;
  allowLeadingZeros?: boolean;
}
const NumberFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  (props, ref) => {
    const {
      onChange,
      prefix,
      allowedDecimalSeparators,
      allowLeadingZeros,
      ...other
    } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        prefix={prefix}
        allowLeadingZeros={allowLeadingZeros ? true : false}
        thousandsGroupStyle={allowedDecimalSeparators ? "lakh" : "none"}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
      />
    );
  }
);

const NumberField: React.FC<
  FieldProps & TextFieldProps & NumericFormatProps
> = (props) => {
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
        inputComponent: NumberFormatCustom as any,
      }}
      {...rest}
      {...field}
    />
  );
};

export default NumberField;

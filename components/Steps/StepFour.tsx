import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Field } from "formik";
import mortgageFormModel from "../../hooks/Steps/mortgageFormModel";
import NumberField from "../FormFields/NumberField";
import InputField from "../FormFields/InputField";

type Props = {
  formField: typeof mortgageFormModel.formField;
};

const StepFour = ({ formField }: Props) => {
  const { companyName, seniorityMonth, income } = formField;

  return (
    <React.Fragment>
      <div className="">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <h6 className="text-slate-400 text-sm my-6 font-bold uppercase">
            Información laboral
          </h6>
          <Grid container spacing={3}>
            <Grid xs={12}>
              <Field
                name={companyName.name}
                label={companyName.label}
                fullWidth
                component={InputField}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <Field
                name={seniorityMonth.name}
                label={seniorityMonth.label}
                fullWidth
                component={NumberField}
                inputProps={{
                  allowedDecimalSeparators: true,
                }}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <Field
                name={income.name}
                label={income.label}
                fullWidth
                component={NumberField}
                inputProps={{
                  prefix: "$",
                  allowedDecimalSeparators: true,
                }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepFour;

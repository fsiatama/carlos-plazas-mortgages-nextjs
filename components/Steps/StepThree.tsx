import React from "react";
import { Grid } from "@mui/material";
import { Field } from "formik";
import mortgageFormModel from "../../hooks/Steps/mortgageFormModel";
import PatternField from "../FormFields/PatternField";
import NumberField from "../FormFields/NumberField";

type Props = {
  formField: typeof mortgageFormModel.formField;
};

const StepThree = ({ formField }: Props) => {
  const { phoneNumber, phoneNumberVC } = formField;

  return (
    <React.Fragment>
      <div className="">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
            Tu información personal
          </h6>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Field
                format="+1 (###) ### ####"
                name={phoneNumber.name}
                label={phoneNumber.label}
                fullWidth
                component={PatternField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name={phoneNumberVC.name}
                label={phoneNumberVC.label}
                customInput={NumberField}
                fullWidth
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepThree;

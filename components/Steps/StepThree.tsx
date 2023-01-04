import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Stack } from "@mui/material";
import { Field } from "formik";
import mortgageFormModel from "../../hooks/Steps/mortgageFormModel";
import PatternField from "../FormFields/PatternField";
import NumberField from "../FormFields/NumberField";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LoadingButton from "@mui/lab/LoadingButton";
import InputField from "../FormFields/InputField";

type Props = {
  formField: typeof mortgageFormModel.formField;
};

const StepThree = ({ formField }: Props) => {
  const { phoneNumber, phoneNumberVC, email } = formField;

  return (
    <React.Fragment>
      <div className="">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <h6 className="text-slate-400 text-sm my-6 font-bold uppercase">
            Información para contactarte
          </h6>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} mdOffset={3}>
              <Field
                name={email.name}
                label={email.label}
                fullWidth
                component={InputField}
              />
            </Grid>
            <Grid xs={12} sm={6} mdOffset={3}>
              <Stack
                direction="row"
                alignItems="flex-start"
                spacing={2}
                justifyContent="center"
              >
                <Field
                  format="+1 (###) ### ####"
                  name={phoneNumber.name}
                  label={phoneNumber.label}
                  fullWidth
                  component={PatternField}
                />
                <LoadingButton
                  variant="outlined"
                  className="h-14"
                  size="large"
                  loading={false}
                  color="success"
                  endIcon={<CheckCircleOutlineIcon />}
                >
                  Verify
                </LoadingButton>
              </Stack>
            </Grid>
            <Grid xs={12} sm={6} mdOffset={3}>
              <Field
                name={phoneNumberVC.name}
                label={phoneNumberVC.label}
                fullWidth
                component={NumberField}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepThree;

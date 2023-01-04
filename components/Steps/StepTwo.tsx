import React from "react";
import { Autocomplete, Grid, Stack, TextField } from "@mui/material";
import { Field } from "formik";
import mortgageFormModel from "../../hooks/Steps/mortgageFormModel";
import InputField from "../FormFields/InputField";
import SwitchField from "../FormFields/SwitchField";
import PatternField from "../FormFields/PatternField";
import SelectField from "../FormFields/SelectField";
import statesData from "../../hooks/Steps/States.json";
import NumberField from "../FormFields/NumberField";
import useStepTwoForm from "../../hooks/Steps/useStepTwoForm";

type Props = {
  formField: typeof mortgageFormModel.formField;
};

const StepTwo = ({ formField }: Props) => {
  const {
    firstName,
    lastName,
    middleName,
    address1,
    address2,
    city,
    state,
    zipcode,
    idType,
    idNumber,
  } = formField;

  const { _handleState, _handleInputState, inputStateValue } = useStepTwoForm();

  return (
    <React.Fragment>
      <div className="">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <h6 className="text-slate-400 text-sm my-6 font-bold uppercase">
            Tu información personal
          </h6>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Field
                name={firstName.name}
                label={firstName.label}
                fullWidth
                component={InputField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name={middleName.name}
                label={middleName.label}
                fullWidth
                component={InputField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name={lastName.name}
                label={lastName.label}
                fullWidth
                component={InputField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                direction="row"
                alignItems="flex-start"
                spacing={2}
                justifyContent="center"
              >
                <SwitchField name={idType.name} />
                <Field
                  format="###-##-####"
                  name={idNumber.name}
                  label={idNumber.label}
                  fullWidth
                  component={PatternField}
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Field
                name={address1.name}
                label={address1.label}
                fullWidth
                component={InputField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name={address2.name}
                label={address2.label}
                fullWidth
                component={InputField}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field
                name={city.name}
                label={city.label}
                fullWidth
                component={InputField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                options={statesData}
                getOptionLabel={(option) => option.label}
                onChange={_handleState}
                onInputChange={_handleInputState}
                inputValue={inputStateValue}
                renderInput={(params) => (
                  <Field
                    {...params}
                    name={state.name}
                    label={state.label}
                    fullWidth
                    inputProps={{
                      ...params.inputProps,
                    }}
                    component={InputField}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name={zipcode.name}
                label={zipcode.label}
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

export default StepTwo;

import { useState } from "react";
import { FormikHelpers } from "formik";

import validationSchema from "./validationSchema";

import mortgageFormModel, { Values } from "./mortgageFormModel";

const { formId, formField } = mortgageFormModel;
const steps = [
  "Tipo de crédito",
  "Información personal",
  "Datos de contacto",
  "Información laboral",
];

const useStepsForm = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const _submitForm = async (
    values: Values,
    actions: FormikHelpers<Values>
  ) => {
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  };

  const _handleSubmit = (values: Values, actions: FormikHelpers<Values>) => {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const _handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return {
    activeStep,
    steps,
    formId,
    formField,
    isLastStep,
    currentValidationSchema,
    _handleSubmit,
    _handleBack,
  };
};

export default useStepsForm;

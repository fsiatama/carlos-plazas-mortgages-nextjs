import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import React from "react";
import StepSuccess from "../components/Steps/StepSuccess";
import { Form, Formik } from "formik";
import formInitialValues from "../hooks/Steps/formInitialValues";
import useStepsForm from "../hooks/Steps/useStepsForm";
import StepOne from "../components/Steps/StepOne";
import StepTwo from "../components/Steps/StepTwo";
import mortgageFormModel from "../hooks/Steps/mortgageFormModel";
import StepThree from "../components/Steps/StepThree";
import StepFour from "../components/Steps/StepFour";

function _renderStepContent(
  step: number,
  formField: typeof mortgageFormModel.formField
) {
  switch (step) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo formField={formField} />;
    case 2:
      return <StepThree formField={formField} />;
    case 3:
      return <StepFour formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

const Application = () => {
  const {
    activeStep,
    steps,
    isLastStep,
    formField,
    currentValidationSchema,
    _handleSubmit,
    _handleBack,
    formId,
  } = useStepsForm();

  return (
    <div className="profile-page">
      <section className="relative block h-128">
        <div className="absolute top-0 w-full h-full bg-center bg-cover  bg-[url('../public/images/form-bg.jpg')]">
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words -mt-48 w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center">
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label: string) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <React.Fragment>
                {activeStep === steps.length ? (
                  <StepSuccess />
                ) : (
                  <Formik
                    initialValues={formInitialValues}
                    validationSchema={currentValidationSchema}
                    onSubmit={_handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form id={formId}>
                        {_renderStepContent(activeStep, formField)}

                        <div className="mb-0 px-6 py-6">
                          <div className="text-center flex justify-between">
                            {activeStep !== 0 ? (
                              <Button size="large" onClick={_handleBack}>
                                Back
                              </Button>
                            ) : (
                              <div> </div>
                            )}
                            <div>
                              <Button
                                disabled={isSubmitting}
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="large"
                              >
                                {isLastStep ? "Send" : "Next"}
                              </Button>
                              {isSubmitting && <CircularProgress size={24} />}
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                )}
              </React.Fragment>
            </div>
          </div>
        </div>
      </section>
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-slate-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  );
};

export default Application;

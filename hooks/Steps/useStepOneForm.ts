import { getIn, useFormikContext } from "formik";

import { CreditTypes, Values } from "./mortgageFormModel";

const useStepOneForm = () => {
  const {
    setFieldValue,
    touched,
    errors,
    values: { creditType },
  } = useFormikContext<Values>();

  const _handleCreditType = (
    event: React.MouseEvent<HTMLElement>,
    newCreditType: typeof CreditTypes
  ) => {
    setFieldValue("creditType", newCreditType);
  };

  const isTouched = getIn(touched, "creditType");
  const errorMessage = getIn(errors, "creditType");

  return {
    creditType,
    _handleCreditType,
    isTouched,
    errorMessage,
  };
};

export default useStepOneForm;

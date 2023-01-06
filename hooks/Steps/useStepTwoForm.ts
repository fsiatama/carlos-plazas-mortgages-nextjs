import { useEffect, useState } from "react";
import { useFormikContext } from "formik";

import { SelectItem, Values } from "./mortgageFormModel";
import statesData from "./States.json";

const useStepTwoForm = () => {
  const [stateValue, setStateValue] = useState<SelectItem | null>();
  const [inputStateValue, setInputStateValue] = useState<string>("");
  const {
    setFieldValue,
    values: { state },
  } = useFormikContext<Values>();

  useEffect(() => {
    if (state) {
      const selectState = statesData.find((a) => a.value === state);
      setStateValue(selectState);
    }
  }, []);

  const _handleState = (
    event: React.SyntheticEvent<Element, Event>,
    newState: SelectItem | null
  ) => {
    setStateValue(newState);
    setFieldValue("state", newState?.value);
  };

  const _handleInputState = (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => {
    setInputStateValue(newInputValue);
  };

  return {
    stateValue,
    inputStateValue,
    statesData,
    _handleInputState,
    _handleState,
  };
};

export default useStepTwoForm;

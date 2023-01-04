import { useFormikContext } from "formik";

import { SelectItem, Values } from "./mortgageFormModel";
import { useState } from "react";

const useStepTwoForm = () => {
  const [toggled, setToggle] = useState<boolean>(true);
  const [inputStateValue, setInputStateValue] = useState<string>("");
  const {
    setFieldValue,
    values: { idType },
  } = useFormikContext<Values>();

  const _handleIdType = (
    event: React.ChangeEvent<HTMLInputElement>,
    newIdType: boolean
  ) => {
    const idTypeVal = newIdType ? "SSN" : "ITIN";

    setFieldValue("idType", idTypeVal);
    setToggle(newIdType);
  };

  // (event: SyntheticEvent<Element, Event>, value: { label: string; value: string; } | null, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<...> | undefined) => void

  const _handleState = (
    event: React.SyntheticEvent<Element, Event>,
    newState: SelectItem | null
  ) => {
    setFieldValue("state", newState?.value);
  };

  const _handleInputState = (
    event: React.SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => {
    setInputStateValue(newInputValue);
  };

  return {
    toggled,
    inputStateValue,
    _handleInputState,
    _handleState,
    _handleIdType,
  };
};

export default useStepTwoForm;

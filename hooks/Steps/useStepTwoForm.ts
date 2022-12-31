import { useFormikContext } from "formik";

import { SelectItem, Values } from "./mortgageFormModel";
import { useState } from "react";

const useStepTwoForm = () => {
  const [toggled, setToggle] = useState<boolean>(true);
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

  const _handleState = (
    event: React.SyntheticEvent<Element, Event>,
    newState: SelectItem | null
  ) => {
    setFieldValue("state", newState?.value);
  };

  return {
    toggled,
    _handleState,
    _handleIdType,
  };
};

export default useStepTwoForm;

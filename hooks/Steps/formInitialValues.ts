import mortgageFormModel, { InitialValues } from "./mortgageFormModel";

const {
  formField: {
    creditType,
    firstName,
    lastName,
    address1,
    city,
    zipcode,
    address2,
    companyName,
    idNumber,
    idType,
    income,
    phoneNumber,
    phoneNumberVC,
    seniorityMonth,
    state,
  },
} = mortgageFormModel;

const initialValues: InitialValues = {
  [creditType.name]: "",
  [firstName.name]: "",
  [lastName.name]: "",
  [address1.name]: "",
  [city.name]: "",
  [zipcode.name]: "",
  [address2.name]: "",
  [companyName.name]: false,
  [idNumber.name]: "",
  [idType.name]: "SSN",
  [income.name]: 0,
  [phoneNumber.name]: "",
  [phoneNumberVC.name]: 0,
  [seniorityMonth.name]: 0,
  [state.name]: "",
};

export default initialValues;

import mortgageFormModel, { InitialValues } from "./mortgageFormModel";

const {
  formField: {
    creditType,
    firstName,
    middleName,
    lastName,
    address1,
    city,
    zipcode,
    address2,
    companyName,
    idNumber,
    idType,
    income,
    email,
    phoneNumber,
    phoneNumberVC,
    seniorityMonth,
    state,
  },
} = mortgageFormModel;

const initialValues: InitialValues = {
  [creditType.name]: "",
  [firstName.name]: "",
  [middleName.name]: "",
  [lastName.name]: "",
  [address1.name]: "",
  [city.name]: "",
  [zipcode.name]: "",
  [address2.name]: "",
  [companyName.name]: "",
  [idNumber.name]: "",
  [idType.name]: "SSN",
  [income.name]: 0,
  [email.name]: "",
  [phoneNumber.name]: "",
  [phoneNumberVC.name]: "",
  [seniorityMonth.name]: 0,
  [state.name]: "",
};

export default initialValues;

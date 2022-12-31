import * as Yup from "yup";
import mortgageFormModel from "./mortgageFormModel";
const {
  formField: {
    creditType,
    firstName,
    lastName,
    address1,
    city,
    zipcode,
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

const ssnRegex = /^(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;

export default [
  Yup.object().shape({
    [creditType.name]: Yup.string()
      .nullable()
      .required(`${creditType.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),
    [city.name]: Yup.string().required(`${city.requiredErrorMsg}`),
    [idNumber.name]: Yup.string()
      .required(`${idNumber.requiredErrorMsg}`)
      .matches(ssnRegex, idNumber.invalidErrorMsg),
    [state.name]: Yup.string().nullable().required(`${state.requiredErrorMsg}`),
    [zipcode.name]: Yup.string()
      .required(`${zipcode.requiredErrorMsg}`)
      .test("len", `${zipcode.invalidErrorMsg}`, (val) =>
        val && val.length === 5 ? true : false
      ),
  }),
  Yup.object().shape({
    [phoneNumber.name]: Yup.string()
      .required(`${phoneNumber.requiredErrorMsg}`)
      .test("len", `${phoneNumber.invalidErrorMsg}`, (val) =>
        val && val.length === 10 ? true : false
      ),

    [phoneNumberVC.name]: Yup.string()
      .required(`${phoneNumber.requiredErrorMsg}`)
      .test("len", `${phoneNumber.invalidErrorMsg}`, (val) =>
        val && val.length === 6 ? true : false
      ),
  }),
  Yup.object().shape({
    [companyName.name]: Yup.string().required(
      `${companyName.requiredErrorMsg}`
    ),
    [seniorityMonth.name]: Yup.string().required(
      `${seniorityMonth.requiredErrorMsg}`
    ),

    [income.name]: Yup.string().required(`${income.requiredErrorMsg}`),
  }),
];

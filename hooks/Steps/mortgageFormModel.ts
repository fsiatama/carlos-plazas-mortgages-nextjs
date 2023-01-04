export enum CreditTypes {
  "firstHouse",
  "refinance",
  "investment",
}

export enum IdTypes {
  "ITIN",
  "SSN",
}

export type SelectItem = {
  label: string;
  value: string | number;
};

export interface InitialValues {
  [x: string]: string | number | boolean;
}

export interface Values {
  creditType: keyof typeof CreditTypes;
  idType: keyof typeof IdTypes;
  idNumber: number;
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  phoneNumber: string;
  phoneNumberVC: number;
  companyName: string;
  seniorityMonth: number;
  income: number;
}

export default {
  formId: "mortgageForm",
  formField: {
    creditType: {
      name: "creditType",
      label: "Credit Type*",
      requiredErrorMsg: "Credit Type is required",
    },
    idType: {
      name: "idType",
      label: "ITIN / SSN *",
      requiredErrorMsg: "ID type is required",
    },
    idNumber: {
      name: "idNumber",
      label: "ID number*",
      requiredErrorMsg: "ID number is required",
      invalidErrorMsg: "ID number is not valid (e.g. 888-88-8888)",
    },
    firstName: {
      name: "firstName",
      label: "First name*",
      requiredErrorMsg: "First name is required",
    },
    lastName: {
      name: "lastName",
      label: "Last name*",
      requiredErrorMsg: "Last name is required",
    },
    middleName: {
      name: "middleName",
      label: "Middle name",
    },
    address1: {
      name: "address1",
      label: "Address Line 1*",
      requiredErrorMsg: "Address Line 1 is required",
    },
    address2: {
      name: "address2",
      label: "Address Line 2",
    },
    city: {
      name: "city",
      label: "City*",
      requiredErrorMsg: "City is required",
    },
    state: {
      name: "state",
      label: "State/Province/Region*",
      requiredErrorMsg: "State/Province/Region is required",
      invalidErrorMsg: "State/Province/Region is not valid",
    },
    zipcode: {
      name: "zipcode",
      label: "Zipcode*",
      requiredErrorMsg: "Zipcode is required",
      invalidErrorMsg: "Zipcode is not valid (e.g. 70000)",
    },
    email: {
      name: "email",
      label: "Email*",
      requiredErrorMsg: "Email is required",
      invalidErrorMsg: "Email is not valid (e.g. youremail@domain.com)",
    },
    phoneNumber: {
      name: "phoneNumber",
      label: "Phone number*",
      requiredErrorMsg: "Phone number is required",
      invalidErrorMsg: "Phone number is not valid (e.g. 70000)",
    },
    phoneNumberVC: {
      name: "phoneNumberVC",
      label: "Validation code*",
      requiredErrorMsg: "Validation code is required",
      invalidErrorMsg: "Validation code is not valid (e.g. 70000)",
    },
    companyName: {
      name: "companyName",
      label: "Company name*",
      requiredErrorMsg: "Company name is required",
    },
    seniorityMonth: {
      name: "seniorityMonth",
      label: "Months of working in the company*",
      requiredErrorMsg: "Months of working is required",
    },
    income: {
      name: "income",
      label: "Average monthly income (demonstrable)*",
      requiredErrorMsg: "Average monthly income is required",
    },
  },
};

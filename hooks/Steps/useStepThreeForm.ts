import { useState } from "react";
import { useFormikContext } from "formik";

import { Values } from "./mortgageFormModel";

type Resp = {
  success: boolean;
  valid?: boolean;
};

const sendForm = async (
  data: Partial<Values>,
  endpoint: string
): Promise<Resp> => {
  const JSONdata = JSON.stringify(data);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };

  const response = await fetch(endpoint, options);
  return await response.json();
};

const useStepThreeForm = () => {
  const {
    values: { phoneNumber, phoneNumberVC },
    getFieldMeta,
  } = useFormikContext<Values>();

  const [helperText, setHelperText] = useState<string>("");
  const [helperTextError, setHelperTextError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [sendCode, setSendCode] = useState<boolean>(false);

  const _handleSendSMS = async () => {
    const data: Partial<Values> = {
      phoneNumber,
    };

    const endpoint = "/api/phone-validation";
    const { touched, error } = getFieldMeta("phoneNumber");
    console.log(phoneNumber.length);

    if (phoneNumber.length < 10 || Boolean(touched && error)) {
      setHelperText("Por favor ingresa un número telefónico valido");
      setHelperTextError(true);
      return;
    }

    const resp = await sendForm(data, endpoint);

    if (!resp.success) {
      setHelperText(
        "No hemos podido enviar el mensaje de texto, por favor verifica tu número telefónico"
      );
      setHelperTextError(true);
      return;
    }

    setHelperText(
      "Hemos enviado un código para verificar tu número telefónico"
    );
    setHelperTextError(false);
    setSendCode(true);

    console.log(resp);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const _handleSendVerify = async () => {
    const data: Partial<Values> = {
      phoneNumber,
      phoneNumberVC,
    };

    const endpoint = "/api/verify-otp";
    const { touched, error } = getFieldMeta("phoneNumberVC");

    if (`${phoneNumberVC}`.length < 6 || Boolean(touched && error)) {
      setHelperText("Por favor ingresa un código valido");
      setHelperTextError(true);
      return;
    }

    const resp = await sendForm(data, endpoint);

    if (!resp.success || !resp?.valid) {
      setHelperText("Por favor ingresa un código valido");
      setHelperTextError(true);
      return;
    }

    setHelperText("Gracias, Hemos verificado tu número telefónico!");
    setHelperTextError(false);
  };

  return {
    loading,
    sendCode,
    helperText,
    helperTextError,
    _handleSendSMS,
    _handleSendVerify,
  };
};

export default useStepThreeForm;

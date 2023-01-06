import { NextApiHandler } from "next";
import twilio from "twilio";

const verifyOTP: NextApiHandler = async (request, response) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const serviceSid = process.env.VERIFY_SERVICE_SID ?? "";

  const client = twilio(accountSid, authToken);

  const { phoneNumber: phone, phoneNumberVC } = request.body;

  if (phone.length < 10 || phoneNumberVC.length < 6) {
    response.statusCode = 404;
    return response.end(JSON.stringify({ success: false, valid: false }));
  }

  const lookup = await client.lookups.v1
    .phoneNumbers(phone)
    .fetch({ countryCode: "US" })
    .catch((e) => {
      console.log(e);
    });

  if (!lookup) {
    response.statusCode = 404;
    return response.end(JSON.stringify({ success: false, lookup: false }));
  }

  const { phoneNumber } = lookup;

  const verify = await client.verify
    .services(serviceSid)
    .verificationChecks.create({ to: phoneNumber, code: phoneNumberVC })
    .catch((e) => console.log(e));

  if (!verify) {
    response.statusCode = 404;
    return response.end(JSON.stringify({ success: false, valid: false }));
  }

  const { valid } = verify;

  response.statusCode = 200;
  return response.end(JSON.stringify({ success: true, valid }));
};

export default verifyOTP;

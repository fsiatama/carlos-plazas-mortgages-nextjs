import { NextApiHandler } from "next";
import twilio from "twilio";

const verifyOTP: NextApiHandler = async (request, response) => {
  const accountSid = "AC98d397193b5d53792d12b1aa06303639"; // process.env.TWILIO_ACCOUNT_SID;
  const authToken = "547ea0b50ca1fca20bbb2e6807266101"; // process.env.TWILIO_AUTH_TOKEN;
  const serviceSid = "VAf65c09a64024f5666935f722b216f614"; // process.env.VERIFY_SERVICE_SID

  const client = twilio(accountSid, authToken);

  const verify = await client.verify
    .services(serviceSid)
    .verificationChecks.create({ to: `+13854649036`, code: "905698" })
    .catch((e) => console.log(e));

  if (!verify) {
    response.statusCode = 500;
    return response.end(JSON.stringify({ valid: false }));
  }

  const { valid } = verify;

  response.statusCode = 200;
  return response.end(JSON.stringify({ valid }));
};

export default verifyOTP;

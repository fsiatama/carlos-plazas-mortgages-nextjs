import { NextApiHandler } from "next";
// import { getSession } from "next-auth/react";
// import { unstable_getServerSession } from "next-auth/next";

import twilio from "twilio";

const phoneValidation: NextApiHandler = async (request, response) => {
  // const session = getSession({ req: request });
  // const session = await unstable_getServerSession(request, response);
  // response.end(JSON.stringify({ hello: "hello word" }));

  // const token = await getToken({ request });

  // console.log(session);

  const accountSid = "AC98d397193b5d53792d12b1aa06303639"; // process.env.TWILIO_ACCOUNT_SID;
  const authToken = "547ea0b50ca1fca20bbb2e6807266101"; // process.env.TWILIO_AUTH_TOKEN;
  const serviceSid = "VAf65c09a64024f5666935f722b216f614"; //process.env.VERIFY_SERVICE_SID

  const client = twilio(accountSid, authToken);

  const lookup = await client.lookups.v1
    .phoneNumbers("(385) 4649036")
    .fetch({ countryCode: "US" })
    .catch((e) => {
      console.log(e);
    });

  if (!lookup) {
    response.statusCode = 500;
    return response.end(JSON.stringify({ lookup: false }));
  }

  const { phoneNumber } = lookup;

  const sendCode = await client.verify
    .services(serviceSid)
    .verifications.create({ to: phoneNumber, channel: "sms" })
    .catch((e) => {
      console.log(e);
    });

  if (!sendCode) {
    response.statusCode = 500;
    return response.end(JSON.stringify({ sendCode: false }));
  }
  console.log(sendCode);

  const { status } = sendCode;

  response.statusCode = 200;
  return response.end(JSON.stringify({ sendCode: true, status }));
};

export default phoneValidation;

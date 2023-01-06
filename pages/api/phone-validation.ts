import { NextApiHandler } from "next";
// import { getSession } from "next-auth/react";
// import { unstable_getServerSession } from "next-auth/next";

import twilio from "twilio";

const phoneValidation: NextApiHandler = async (request, response) => {
  // const session = getSession({ req: request });
  // const session = await unstable_getServerSession(request, response);
  // response.end(JSON.stringify({ hello: "hello word" }));

  // const token = await getToken({ request });

  const { phoneNumber: phone } = request.body;

  if (phone.length < 10) {
    response.statusCode = 404;
    return response.end(JSON.stringify({ success: false, lookup: false }));
  }

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const serviceSid = process.env.VERIFY_SERVICE_SID;

  const client = twilio(accountSid, authToken);

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

  const sendCode = await client.verify
    .services(serviceSid)
    .verifications.create({ to: phoneNumber, channel: "sms" })
    .catch((e) => {
      console.log(e);
    });

  if (!sendCode) {
    response.statusCode = 404;
    return response.end(JSON.stringify({ success: false, sendCode: false }));
  }

  const { status } = sendCode;

  response.statusCode = 200;
  return response.end(
    JSON.stringify({ success: true, sendCode: true, status })
  );
};

export default phoneValidation;

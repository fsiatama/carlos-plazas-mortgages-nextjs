/** @type {import('next').NextConfig} */


module.exports = (pase) => {

  const env = {
    TWILIO_ACCOUNT_SID: (() => {
      return "AC98d397193b5d53792d12b1aa06303639"
    })(),
    TWILIO_AUTH_TOKEN: (() => {
      return "547ea0b50ca1fca20bbb2e6807266101"
    })(),
    VERIFY_SERVICE_SID: (() => {
      return "VAf65c09a64024f5666935f722b216f614"
    })(),
  }

  return {
    env,
    reactStrictMode: true,
  }
}

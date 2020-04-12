import mangopay from 'mangopay2-nodejs-sdk';

export default new mangopay({
  clientId: process.env.MANGOPAY_CLIENT_ID,
  clientApiKey: process.env.MANGOPAY_CLIENT_SECRET,
  baseUrl: process.env.MANGOPAY_URL,
});

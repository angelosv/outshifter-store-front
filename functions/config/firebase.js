const firebase = require('firebase-admin')
var serviceAccount = {
    "type": "service_account",
    "project_id": "outshifter-storefront",
    "private_key_id": "54d3c01bb84fff6d2fb078fedc77de8239cdf70c",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCHHkkqE52/RVc\nqyPWingnLWRSSoOuDmhqgSX/lhQZMAN2qkGN1SiRaw8EQcvjlMKEHoRqF/DR+rCh\nUC3Ta3ImC/ZUF4sVZ6CFghxYg0pPzuYGFod8+vwcxrYkBRt4VWkSeDQ06LFnu2l0\nEr0nItRTtX08WtAehmntVKBPWEn+UkuBOnPGl8SaYcREewcS4H4psNncJNbSQJAn\negZncB+J01cCGs+yTvpROoTHvkWc+NsWAYK/nfp8eUyyw78YIY26mHgIoLurLRti\nE8UoraMSUPMVG4aXJXdAKTdPzvoN7Zn4BXWT4V/MnW4b1uSLgqiBpXacxoxs00gR\nCw5mPHW5AgMBAAECggEAJGnvfuU07QTuqjbvrupEfoL5KCfS2obY5yvpmzAF/rCf\nYbYwPIFxjhARndiS/VM1h0/rQrTRiC6ZTnWqVxg3rnP9hopxHLeXKRx+oUsl2GFl\njNxSl+tEesh7ODgeDl2la6HRl2BUkXNapbvzMIGL59Uq1HTryGIqQmum9COJo/Ps\nBPxyzvQ57W9Io6PpHfxPMOIqDYcjNNrPrFI1vxSI8vBtmJzDCbTYiRxQpHdyEi5c\n+vAudXvzIteu93kTuJJ/mnAxPMV4bwy8hcpnNN2P9DvYLpfGtLA7wXU2akjL99He\nJcDEwp7TByHV8IC3GfeYIPDDnn6WdVSXrpUZKOEJxQKBgQDnURjo6/ZIYnu51o9g\nVCQmS76SsPmKlX+lEPNxO2rDTIxuJtc88XMDEMoXqHS06yeXuoPUjvjrRPYpsaU1\nJW0+9mTLvDJWx6uyZWxc89a23S1cTNBi8VFYsOLNEabV8y9IfcMV/xPz7pdivbUU\nRMUfPEeRGvaYWYIuEu40+Z0/1QKBgQDW0wcrYj+kQdOfGaJcP6fy6hAjnsXlhitD\nwkYtMq2o1huqTIbqhER5r7ASJvbDRo4/ORahfWo3kghQA8H2TSIHiyWGiYqpcniN\nwQ461VCX/oZxBuCL7xrm+X4WVm6EQu9LRmw8ue7NZY51OTXLyQTczk34mJ027ww4\nOpN7WlM0VQKBgAMosV1k840TgzsLehPHsmKvgB/CuPWyiva3H4v5UsDuB7DtaN0V\nMwvkq83c6BMcbwL8chZyCWY1H+N74JS0OSS1+rRpkopq2aZrCirOzazbomXzSpk/\nUGwUplREnHGpi4jC5uoi/KPFK14W1yU6tzJxAU0zABEej8+PRJ+GlSYtAoGBAL7W\nKrlMhzK403CzyfrfBaiSa5HpGu4h+U8xRzwhmAmzYlIvt26f32CmROhrOq0QgY8C\nfOsqyW/iR4YlQGo37TH8V3Kjvs12hkePJ7/1/al4jx/bNyC4YRKssmjPkU/nUkJx\npfdwSQan4BycnQCSa8JndvaPRKInS5ir2JYtEFsdAoGABaZ1Pcp4JJ54xGsDqgsu\nG4umcyEIhc8Ugk3raTHrRq9Q73AiavA/Woqtp1KYTamYGaMnr9aDjzlHZX+nDj0t\n9E9fsLaGJ+LcM/eHWh2S7opCNxA4ANYG3HO7WTKfm+QYdGlUOfi+Kl/RHo5lkCg+\n8rewc5w/RQiZj51GxHTLiHk=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-b2tq5@outshifter-storefront.iam.gserviceaccount.com",
    "client_id": "101570029030996498860",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-b2tq5%40outshifter-storefront.iam.gserviceaccount.com"
  }


const app = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://outshifter-storefront.firebaseio.com"
  });
  const db = firebase.firestore();
const auth = firebase.auth()
  module.exports = {
    firebase: app,
    db: db,
    auth: auth
  }     

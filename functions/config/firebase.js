const firebase = require('firebase-admin')
var serviceAccount = require("../../../outshifter-storefront-54d3c01bb84f.json");


const app = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://outshifter-storefront.firebaseio.com"
  });
  const db = firebase.firestore();

  module.exports = {
    firebase: app,
    db: db
  }     

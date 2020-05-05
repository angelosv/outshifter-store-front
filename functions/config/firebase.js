const firebase = require('firebase-admin')
const firebaseConfig = require('./prod-config')



const app = firebase.initializeApp({
    credential: firebase.credential.cert(firebaseConfig),
    databaseURL: "https://outshifter-storefront.firebaseio.com"
  });
  const db = firebase.firestore();
  const auth = firebase.auth()


  module.exports = {
    firebase: firebase,
    db: db,
    auth
  }     

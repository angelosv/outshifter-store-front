const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();
let docRef = db.collection('users').doc('alovelace');



 exports.testing = functions.https.onRequest((request, response) => {
     const message = {text: 'HOLA COMO ESTAS?'}
     console.log('HELLLO FROM FIREBASE')
     response.send(message)
 })

 exports.miputamadre = functions.https.onRequest((request, response) => {
    const message = {text: 'HOLA COMO ESTAS?'}
    console.log('HELLLO FROM FIREBASE')
    response.send(message)
    db.collection('orders').add({
        email: 'myemail'
    })
})
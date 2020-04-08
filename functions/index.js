const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp();



 exports.testing = functions.https.onRequest((request, response) => {
     const message = {text: 'HOLA COMO ESTAS?'}
     console.log('HELLLO FROM FIREBASE')
     response.send(message)
 })

 exports.newOrder = functions.https.onCall(data, context =>{

    if(!context.auth){
        console.log('create a user')
    }
return admin.firestore().collection('orders').add({
    id: 1,
    items: {

    },
    subtotal:'2342',
    customer: {
        id: 12323,
        name: "angelo"
    }

})
 })
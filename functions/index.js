const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const functions = require('firebase-functions');
const admin = require('firebase-admin')

var serviceAccount = require("../outshifter-storefront-54d3c01bb84f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://outshifter-storefront.firebaseio.com"
});




let db = admin.firestore();
let docRef = db.collection('users').doc('alovelace');

const orderRoutes = require('./api/routes/orders')
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(cors({origin:true}));



//Routes 
app.use('/orders', orderRoutes);

app.use((req, res, next)=>{
const error = new Error('Not found');
error.status = 404;
next(error);
})

app.use((error, req, res, next)=>{
res.status(error.status || 500);
res.json({
    error: {
        message: error.message,
        other: 'Otro',
    }
})
})



 exports.api = functions.https.onRequest(app);
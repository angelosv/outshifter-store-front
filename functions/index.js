const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const functions = require('firebase-functions');

const customerRoutes = require('./api/routes/customer');
const orderRoutes = require('./api/routes/orders');
const paymentRoutes = require('./api/routes/payments')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(cors({origin:true}));



//Routes 
app.use('/orders', orderRoutes);
app.use('/customer', customerRoutes);
app.user('/payment', paymentRoutes)

 exports.api = functions.https.onRequest(app);

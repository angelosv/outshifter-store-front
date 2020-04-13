const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const functions = require('firebase-functions');


const orderRoutes = require('./api/routes/orders')
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(cors({origin:true}));



//Routes 
app.use('/orders', orderRoutes);




 exports.api = functions.https.onRequest(app);
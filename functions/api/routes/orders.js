const admin = require('firebase-admin')
const express = require("express");
const router = express.Router();
const db = admin.firestore();

checkAuth = (req, res, next) => {

        next();

};


router.get('/', checkAuth, (req, res, next)=> {


  res.status(200).json({
      message: 'Orders were fetched'
  });  
});

router.post('/new', (req, res)=>{
    console.log(req.body)
     var order_id = req.body.order_id

     var order_items = req.body.data_order.items;
    var order_customer = req.body.data_order.customer;
    var order_billing_address = req.body.data_order.billing_address;
    var order_shipping = req.body.data_order.shipping;
   
let order =  db.collection('orders').doc(order_id).set({
        order_items: order_items,
        order_customer: order_customer,
        order_billing_address: order_billing_address,

  });
  console.log(res)
    res.status(200).json({
        message: 'order was placed succesfull',
        
    })
})


module.exports = router;

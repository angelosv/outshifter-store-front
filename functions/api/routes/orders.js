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
    console.log(req.body.order_id)
     var order_id = req.body.order_id
let order =  db.collection('orders').doc(order_id).set({
    'first': 'Alan',
    'middle': 'Mathison',
    'last': 'Turing',
    'born': 1912
  });
    res.status(200).json({
        message: 'order was placed succesfull'
    })
})


module.exports = router;

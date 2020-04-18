const firebase = require('../../config/firebase');
const logger = require('../../config/logger');
const service = require('../services/userService')

async function orderController(req, res){
    const {order_id} = req.body;
    const { items, customer, billing_address, shipping} = req.body.data_order;

    try {
        const orderSaved = await firebase.db.collection('orders').doc(order_id)
    .set({
      order_items: items,
      order_customer: customer,
      order_billing_address: billing_address,
      order_shipping: shipping
    });
    res.status(201).send(orderSaved)
        logger.debug(orderSaved)
        const validation = await service.verif

    } catch (error) {
        console.error(error)
        logger.debug(error)
        res.status(500).send(error)
    }
    

}





module.exports = orderController


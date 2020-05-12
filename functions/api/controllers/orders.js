const firebase = require('../../config/firebase');
const logger = require('../../config/logger');
const service = require('../services/userService')
const uuidv4 = require('uuid/v4')

async function orderController(req, res){
    const authId = req.useruid
    const { items, customer, billing_address, shipping} = req.body.data_order;
    try {
        const orderSaved = await firebase.db.collection(`orders`).doc(uuidv4())
    .set({
    order_user: authId,
    order_items: items,
    order_customer: customer,
    order_billing_address: billing_address,
    order_shipping: shipping
    });
    logger.debug(orderSaved)
    const validation = await service.verif
    res.status(201).send(orderSaved)
    } catch (error) {
    console.error(error)
    logger.debug(error)
    res.status(500).send(error)
    }
    

}





module.exports = orderController


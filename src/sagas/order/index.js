import {call, all, fork, put, takeEvery, select, delay} from  'redux-saga/effects';
import {PLACE_AN_ORDER_ERROR, PLACE_AN_ORDER_SUCCES, PLACE_AN_ORDER} from '../../constants/ActionTypes';
import {placeAnOrderError, placeAnOrderSucces} from '../../actions/index';
import axios from 'axios';
import get from '../../api/api'

const apiAxios = axios.create();

function* getOrder(order){
console.log(order, 'estos son values')
try{
    const response =  yield apiAxios.post('http://localhost:5001/outshifter-storefront/us-central1/api/orders/new', {
        order_id: performance.now(),
        order_items: order.items,
        order_customer: order.customer,
        order_billing_adress: order.billing_adress,
        order_shipping: order.shipping
    })
console.log('response from server', response.data)
yield put(placeAnOrderSucces())
}catch(error){
    yield put(placeAnOrderError())

}
}

export function* watchPlaceOrder(){

yield takeEvery(PLACE_AN_ORDER, getOrder)
}
export default function* orderRootSaga(){
    yield all([
        fork(watchPlaceOrder),
    ])
}
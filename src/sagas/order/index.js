import {call, all, fork, put, takeEvery, select, delay} from  'redux-saga/effects';
import {PLACE_AN_ORDER_ERROR, PLACE_AN_ORDER_SUCCES, PLACE_AN_ORDER} from '../../constants/ActionTypes';
import {placeAnOrderError, placeAnOrderSucces} from '../../actions/index';
import uuidv4 from 'uuid/v4'
import axios from 'axios';
import get from '../../api/api'

const apiAxios = axios.create();

function* getOrder(data_order){
console.log(data_order, 'estos son values')
try{
    const response =  yield apiAxios.post('http://localhost:5001/outshifter-storefront/us-central1/api/orders/new', {
        order_id: uuidv4(),
        data_order: data_order.order
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
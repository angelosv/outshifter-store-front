import { all, fork, put, takeEvery} from  'redux-saga/effects';
import { PLACE_AN_ORDER} from '../../constants/ActionTypes';
import {placeAnOrderError, placeAnOrderSucces} from '../../actions/index';
import uuidv4 from 'uuid/v4'
import axios from 'axios';

const apiAxios = axios.create();

function* getOrder(data_order){
try{
    const response =  yield apiAxios.post('http://localhost:5001/outshifter-storefront/us-central1/api/orders/new', {
        order_id: uuidv4(),
        data_order: data_order.order
    })
console.log('response from server', response)
yield put(placeAnOrderSucces(response))
}catch(error){
    yield put(placeAnOrderError(error))
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
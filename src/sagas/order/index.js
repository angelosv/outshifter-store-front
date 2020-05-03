import { all, fork, put, takeEvery} from  'redux-saga/effects';
import { PLACE_AN_ORDER} from '../../constants/ActionTypes';
import {placeAnOrderError, placeAnOrderSucces} from '../../actions/index';
import uuidv4 from 'uuid/v4'
import axios from 'axios';
import {auth} from '../../firebase';

const apiAxios = axios.create();

function* getToken(){
    try{
        const response = yield auth.currentUser.getIdToken();
        console.log(response, 'geting token')
return response
    }catch (error){
        console.log(error.message)
    }
}


function* getOrder(data_order){
    const token = yield auth.currentUser.getIdToken();
    console.log(token,'estoy en token')
try{
    const config = {
        headers: {authorization: `Bearer ${token}` }
    };
const bodyParameters = {
    order_id: uuidv4(),
    data_order: data_order.order
}
    const response =  yield apiAxios.post('http://localhost:5001/outshifter-storefront/us-central1/api/orders/new', bodyParameters, config)
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
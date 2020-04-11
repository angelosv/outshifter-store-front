import {call, all, fork, put, takeEvery, select, delay} from  'redux-saga/effects';
import {PLACE_AN_ORDER_ERROR, PLACE_AN_ORDER_SUCCES, PLACE_AN_ORDER} from '../../constants/ActionTypes';
import {placeAnOrderError, placeAnOrderSucces} from '../../actions/index';
import rest from '../../api/api';

function* getOrder(values){
const response = 'respuesta'
    yield put(placeAnOrderSucces(response))

}


export function* watchPlaceOrder(){

yield takeEvery(PLACE_AN_ORDER, getOrder)
}
export default function* orderRootSaga(){
    yield all([
        fork(watchPlaceOrder),
    ])
}
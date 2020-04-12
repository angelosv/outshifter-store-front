import {all} from 'redux-saga/effects';
import productsSagas from  './products'
import orderRootSaga from './order'

export default function* rootSaga(){
    yield all([
        productsSagas(),
        orderRootSaga()
    ])
}
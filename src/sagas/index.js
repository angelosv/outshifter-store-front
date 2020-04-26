import {all} from 'redux-saga/effects';
import productsSagas from  './products'
import orderRootSaga from './order'
import authSagas from './auth'
export default function* rootSaga(){
    yield all([
        productsSagas(),
        orderRootSaga(),
        authSagas()
    ])
}
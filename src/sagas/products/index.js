import {call, all, fork, put, takeEvery, select} from  'redux-saga/effects'
import { 
  PRODUCTS_MEDIATOR_FETCH
} from '../../constants/ActionTypes'
import { productsMediatorSuccess, productsMediatorError } from '../../actions/index.js';
import rest from '../../api/api';
import { api } from '../../api/api'

function* findAll(){
try{
  const response = yield rest.get()
  const products = (response.data);
  yield put(productsMediatorSuccess(products)
  )
}
catch(error){
  yield put(productsMediatorError({ error}))
}
}



  export function* watchProductsMediator() {
  yield takeEvery(PRODUCTS_MEDIATOR_FETCH, findAll);
}

export default function* rootSaga(){
yield all([
  fork(watchProductsMediator),
])
}
import {all, put, takeEvery, select} from  'redux-saga/effects';
import {
    LOGIN_USER_FETCH,
    LOGIN_USER_FETCH_SUCCESS,
    LOGIN_USER_UPDATE,
    FIREBASE_LOGIN,
    FIREBASE_LOGIN_SUCCESS,
    FIREBASE_LOGIN_ERROR,
    FIREBASE_LOGOUT,
    FIREBASE_LOGOUT_SUCCESS,
    FIREBASE_RECOVERY_PASSWORD,
    FIREBASE_CHANGE_PASSWORD,
    FIREBASE_REGISTER_USER_SUCCESS,
    FIREBASE_CHANGE_EMAIL,
    FIREBASE_REGISTER_USER_INIT,
} from '../../constants/ActionTypes'


export default function* startRegister(){
    console.log('Desde saga')

}


export default function* startLogin(){
    console.log('hola desde startLogin')
}



export default function* rootSaga(){
    yield all([
        takeEvery(FIREBASE_LOGIN,startRegister),
        takeEvery(FIREBASE_LOGIN, startLogin)
    ])
}
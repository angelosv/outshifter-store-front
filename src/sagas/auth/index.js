import {auth} from '../../firebase';

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
import { firebaseLoginSucces, firebaseLoginError } from '../../actions';

function* startRegister(){
    console.log('Desde saga')

}


function* startLogin({payload}){
    const {email, password } = payload;
    try {
        const authUser = yield auth.signInWithEmailAndPassword(email, password);
        const userId = authUser.user.uid;
        yield put(firebaseLoginSucces(userId));
        localStorage.setItem('authUser',userId)
    } catch (error) {
        console.log(error.message)
        yield put(firebaseLoginError(error.message))
    }
    
}



export default function* rootSaga(){
    yield all([
        takeEvery(FIREBASE_LOGIN, startLogin)
    ])
}
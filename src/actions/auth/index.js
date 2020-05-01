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
} from '../../constants/ActionTypes';

export const firebaseRegistrerInit = ()=> ({
    type: FIREBASE_REGISTER_USER_INIT
})

export const firebaseLoginSucces = user => ({
    type: FIREBASE_LOGIN_SUCCESS,
    payload: user
})

export const firebaseLoginError = (message) => ({
    type: FIREBASE_LOGIN_ERROR,
    payload: message
})

export const firebaseLogin = (payload) => ({
    type: FIREBASE_LOGIN,
    payload
})

export const logoutUser = data => ({
    type: FIREBASE_LOGOUT,
    payload: data
})

export const logoutUserSucces = () => ({
    type: FIREBASE_LOGOUT_SUCCESS,
})
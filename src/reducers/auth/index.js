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

const INIT_STATE = {
    user: {},
    isRegistering: false,
    authId:'',
    error: false
}

export default (state = INIT_STATE, action)=>{
    switch(action.type){
        case FIREBASE_LOGIN:
            {
                return {...state, loading: true, error: false}
            }
       case FIREBASE_REGISTER_USER_INIT:
        {
            return {...state, isRegistering:true}
        }
        case FIREBASE_LOGIN_SUCCESS:
          console.log(action.payload,'esto es payload')
            return {
              ...state,
              loading: false,
              authId: action.payload.uid,
              user: {
                name: '',
                email: action.payload.email},

              error: false,
            };
          case FIREBASE_LOGIN_ERROR:
            return {
              ...state, loading: false, errorMessage: action.payload, error: true
            };
          case FIREBASE_REGISTER_USER_SUCCESS:
            return { ...state, loading: false, errorMessage: '' };
          case FIREBASE_LOGOUT_SUCCESS:
            return { ...state, loading: false, authId: '', user:{}, errorMessage: ''  };
          default:
            return state;
        }
}
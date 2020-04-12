import {
PLACE_AN_ORDER,
PLACE_AN_ORDER_SUCCES,
PLACE_AN_ORDER_ERROR
} from '../../constants/ActionTypes'


const INIT_STATE = {

};
  

export default  (state = INIT_STATE, action) => {
    switch(action.type){
        case PLACE_AN_ORDER:
            return {...state,
             isLoading: true}
        case PLACE_AN_ORDER_SUCCES:
            return {...state, isLoading: false, }
        case PLACE_AN_ORDER_ERROR:
            return {...state, isLoading: false}              
        default:
            return state
        }
}
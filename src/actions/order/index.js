import {
    PLACE_AN_ORDER,
    PLACE_AN_ORDER_SUCCES,
    PLACE_AN_ORDER_ERROR
} from '../../constants/ActionTypes'

export const placeAnOrder = (carList) =>({
    type:PLACE_AN_ORDER,
    carList
})

export const placeAnOrderSucces = (response) =>({
    type:PLACE_AN_ORDER_SUCCES,
    response
})

export const placeAnOrderError = (message) => ({
    type:PLACE_AN_ORDER_ERROR,
    message
})
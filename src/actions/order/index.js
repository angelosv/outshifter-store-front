import {
    PLACE_AN_ORDER,
    PLACE_AN_ORDER_SUCCES,
    PLACE_AN_ORDER_ERROR
} from '../../constants/ActionTypes'

export const placeAnOrder = (order) =>({
    type:PLACE_AN_ORDER,
order
})

export const placeAnOrderSucces = (response) =>({
    type:PLACE_AN_ORDER_SUCCES,
    response
})

export const placeAnOrderError = (message) => ({
    type:PLACE_AN_ORDER_ERROR,
    message
})
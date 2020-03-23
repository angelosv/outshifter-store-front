import {
  ADD_TO_CART,
  INCREMENT_QTY,
  DECREMENT_QTY,
  REMOVE_FROM_CART
} from "../../constants/ActionTypes";

export const addToCart = (product, qty)=> ({
  type: ADD_TO_CART,
  product,
  qty
})

export const removeFromCart = product => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    product
  })
}

export const decrementQty = product => (dispatch) => {
  dispatch({
    type: DECREMENT_QTY,
    product
  })
}

export const incrementQty = product => (dispatch) => {
  dispatch({
    type: INCREMENT_QTY,
    product
  })
}
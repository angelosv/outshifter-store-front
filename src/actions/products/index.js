import {
    PRODUCTS_MEDIATOR_FETCH,
    PRODUCTS_MEDIATOR_FETCH_SUCCESS,
    PRODUCTS_MEDIATOR_FETCH_ERROR,
  } from '../../constants/ActionTypes';
  
  export const productsMediatorFetch = () => ({
    type: PRODUCTS_MEDIATOR_FETCH,
  });
  
  export const productsMediatorSuccess = products => ({
    type: PRODUCTS_MEDIATOR_FETCH_SUCCESS,
    products,
  });
  
  export const productsMediatorError = errorMessage => ({
    type: PRODUCTS_MEDIATOR_FETCH_ERROR,
    payload: errorMessage,
  });
  
  
  export const getAllProducts = () => dispatch => {
      dispatch(productsMediatorFetch())
      console.log('dispatching gett all products')
  }
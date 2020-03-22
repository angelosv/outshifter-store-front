import {
  PRODUCTS_MEDIATOR_FETCH,
  PRODUCTS_MEDIATOR_FETCH_SUCCESS,
  PRODUCTS_MEDIATOR_FETCH_ERROR,
} from '../../constants/ActionTypes'

const INIT_STATE = {
  products: null,
  error: false,
  isLoading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_MEDIATOR_FETCH:
      return { ...state, isLoading: true };
    case PRODUCTS_MEDIATOR_FETCH_SUCCESS:
      return { ...state, isLoading: false, products: action.products };
    case PRODUCTS_MEDIATOR_FETCH_ERROR:
      return {
        ...state, isLoading: false, error: true, errorMessage: action.payload,
      };
    default:
      return { ...state };
  }
};

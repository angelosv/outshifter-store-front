import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QTY,
  DECREMENT_QTY
} from "../../constants/ActionTypes";

export default function cartReducer(state = { cart: [] }, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const productId = action.product.id;
      if (state.cart.findIndex(product => product.id === productId) !== -1) {
        const cart = state.cart.reduce((cartAcction, product) => {
          if (product.id === productId) {
            cartAcction.push({
              ...product,
              qty: product.qty + 1,
              sum: product.publicPrice * product.qty + 1
            });
          } else {
            cartAcction.push(product);
          }
          return cartAcction;
        }, []);
        return { ...state, cart };
      }
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.product,
            qty: action.qty,
            sum: action.product.publicPrice * action.qty
          }
        ]
      };
    case REMOVE_FROM_CART: {
      console.log(action.product, "<--- esto es aciton");
      const productId = action.product.id;
      return {
        cart: state.cart.filter(item => item.id !== productId)
      };
    }
    case INCREMENT_QTY: {
      console.log(
        state.cart.findIndex(product => product.id === action.product.id) !== -1
      );

      console.log(action.product.id, "produc id");
      const cart = state.cart.reduce((cartAcc, product) => {
        if (product.id === action.product.id && product.qty >= 1) {
          console.log("price: " + product.publicPrice + " Qty: " + product.qty);
          cartAcc.push({ ...product, qty: product.qty + 1 });
        } else {
          cartAcc.push(product);
        }

        return cartAcc;
      }, []);

      return { ...state, cart };
    }
    case DECREMENT_QTY: {
      console.log(
        state.cart.findIndex(product => product.id === action.product.id) !== -1
      );

      console.log(action.product.id, "produc id");
      const cart = state.cart.reduce((cartAcc, product) => {
        if (product.id === action.product.id && product.qty > 1) {
          console.log("price: " + product.publicPrice + " Qty: " + product.qty);
          cartAcc.push({ ...product, qty: product.qty - 1 }); // Decrement qty
        } else {
          cartAcc.push(product);
        }

        return cartAcc;
      }, []);

      return { ...state, cart };
    }

    default:
  }
  return state;
}

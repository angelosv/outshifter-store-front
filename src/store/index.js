import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import appReducers from "../reducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

//importando React-Saga para peticiones al API
//import createSagaMiddleware from 'redux-saga'
import sagas from "../sagas";
const logger = createLogger(store => next => action => {
  console.group(action.type);
  console.log("The action: ", action);
  const returnValue = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return returnValue;
});

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const sagaMiddleware = createSagaMiddleware();

//se crea el store a partir de los reducers
const store = createStore(
  appReducers,
  persistedState,
  compose(
    applyMiddleware(thunkMiddleware, logger, sagaMiddleware),

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : function(f) {
          return f;
        }
  )
);

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(state);
});
sagaMiddleware.run(sagas);

export default store;

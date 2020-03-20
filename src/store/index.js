import { createStore,  applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';

import appReducers from '../reducers'
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'


//importando React-Saga para peticiones al API
//import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
const logger = createLogger((store) => (next) => (action) => {
    console.group(action.type)
    console.log('The action: ', action)
    const returnValue = next(action)
    console.log('The new state: ', store.getState())
    console.groupEnd()
    return returnValue
})


// Funcion que comprueba si existe un estado guardado en la cache del navegador
const persistedState = loadFromLocalStorage()


const sagaMiddleware = createSagaMiddleware()


//se crea el store a partir de los reducers
const store = createStore(appReducers, persistedState, compose(
    applyMiddleware(thunkMiddleware, logger, sagaMiddleware),

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
        return f;
    }
));

sagaMiddleware.run(sagas)

export default store
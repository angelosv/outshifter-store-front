import { combineReducers } from "redux";
import products from './products';

// importar reducers de multilangual

//aqui importo reducers de cada funcionalidad

// aquí combino los reducers para el componentdidmount

const reducers = combineReducers({
    data: products
})

export default reducers
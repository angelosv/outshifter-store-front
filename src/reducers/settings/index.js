import { DEFAULT_SETTINGS } from '../../constants/ActionTypes';
import * as defaultvalues from '../../constants/defaultValus'
const INIT_SATE = {
    productImage: defaultvalues.productImage
}

export default (state = INIT_SATE, action) => {
switch (action.type){
    case DEFAULT_SETTINGS:
        return {...state}
}
return {...state}
}
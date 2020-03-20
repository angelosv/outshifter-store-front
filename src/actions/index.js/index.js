import { productsMediatorFetch} from './products'
export * from './products'

export const getAllProducts = () => dispatch => {
    dispatch(productsMediatorFetch())
    console.log('dispatching gett all products')
}
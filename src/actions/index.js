import { productsMediatorFetch} from './products'
export * from './products'
export * from './cart'
export * from './auth'
export * from './order'

export const getAllProducts = () => dispatch => {
    dispatch(productsMediatorFetch())
    console.log('dispatching gett all products')
}
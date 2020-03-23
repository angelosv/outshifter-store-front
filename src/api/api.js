import axios from 'axios';

const get = async path => axios.get(api.url)

export default {
    get,
}

export const api = {
    url: 'http://18.221.170.134:3000/api/users/29/products',
    reseller:{
        get: 'users/21/products'
    }
}


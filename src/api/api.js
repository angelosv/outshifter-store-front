import axios from 'axios';
import {api} from '../constants/defaultValus';

const apiAxios = axios.create();



const getOutshifter = async path => apiAxios.get(api2.url)

const get = async path => apiAxios.get(api.url)

const post = (path, body) => apiAxios.post(api.urlBase + path, body);

const put = async (path, body) => apiAxios.put(api.urlBase + path, body);

const patch = async (path, body) => apiAxios.patch(api.urlBase + path, body);

const remove = async (path, body) => apiAxios.delete(api.urlBase + path, { data: body });

const head = async path => apiAxios.head(api.urlBase + path);


export default {
    get,
    post,
    put,
    remove,
    head,
    patch,
    apiAxios,
    getOutshifter,
}

export const api2 = {
    url: 'http://18.221.170.134:3000/api/users/29/products',
    reseller:{
        get: 'users/21/products'
    }
}


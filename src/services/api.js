import axios from 'axios';
import { apiUrl } from '../utils/constants';

const url = `${apiUrl}/`

const Api = axios.create({
    baseURL: `${url}`,
});

Api.interceptors.request.use(async config => {
    const token = '';
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

export default Api;
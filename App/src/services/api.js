import axios from 'axios';
import { serverIP } from '../utils/constants';

const url = `http://${serverIP}:1337/api/`

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
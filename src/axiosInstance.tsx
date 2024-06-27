import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7265',
    timeout: 10000,
});

export default axiosInstance;
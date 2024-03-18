import axios from 'axios';

const service = axios.create({
    baseURL: 'loacalhost',
    timeout: 5000,
})


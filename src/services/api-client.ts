import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f6b70617d6844b95a3b744fa6a0d7e8a'
    }
})
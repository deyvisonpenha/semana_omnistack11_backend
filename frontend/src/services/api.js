import axios from 'axios';

const api = axios.create({
    baseURL: 'https://3333-e222d25b-fb3a-4227-ac4c-dc129ec8573e.ws-us02.gitpod.io'
});

export default api;
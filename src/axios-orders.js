import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-poke.firebaseio.com/'
});

export default instance;
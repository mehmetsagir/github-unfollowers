import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export default Axios;

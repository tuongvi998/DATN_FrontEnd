import axios from 'axios';
const URL = "http://127.0.0.1:8000/api";

export default {
    postNormal(endpoint, payload) {
        return axios.post(URL + endpoint, payload, { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } });
    }
}
import axios from "axios";
const URL = "http://127.0.0.1:8000/api";

export default {
    getAuth(endpoint, id) {
        if (id) {
            return axios.get(URL + endpoint + "/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
        } else
            return axios.get(URL + endpoint, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
    },
    postAuth(endpoint) {
        return axios.post(URL + endpoint, null, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        });
    },
    postNormal(endpoint, payload) {
        return axios.post(URL + endpoint, payload, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        });
    },
    getNormal(endpoint, id) {
        if (id) {
            return axios.get(URL + endpoint + "/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
        }
        return axios.get(URL + endpoint, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        });
    },
    deleteNormal(endpoint, id) {
        return axios.delete(URL + endpoint + "/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        });
    },
};
/**
 * Created by Bartlomiej Rutkowski on 23.10.16.
 */
import axios from 'axios';

const DEV_URL = 'https://newmobilereality.sadek.usermd.net/api';

const getURL = () => {
    switch (process.env.NODE_ENV) {
        case 'dev':
            return DEV_URL;
        default:
            return DEV_URL;
    }
};

export const API_URL = getURL();

export function callApiGet(URL, query) {
    return axios
        .get(`${API_URL}/${URL}`, {
            params: {
                query
            }
        });
}

export function callApiPost(URL, body) {
    return axios
        .post(`${API_URL}/${URL}`, body);
}


/*
export function callApiPut(URL, body) {
    return axios
        .put(`${API_URL}/${URL}`, body);
}
*/

export function callApiDelete(URL, body) {
    return axios
        .delete(`${API_URL}/${URL}`, { params: body });
}

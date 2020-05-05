import axios from 'axios'

const BASE_URL = process.env.VUE_APP_API_ENDPOINT || "http://127.0.0.1:3000"

export const api = axios.create({
    baseURL: `${BASE_URL}/api`,
    // headers: {
    //   Authorization: {
    //     toString() {
    //       if (!userStorage.token) return null;
    //       return `Token ${userStorage.token}`;
    //     }
    //   }
    // }
});

export default api;
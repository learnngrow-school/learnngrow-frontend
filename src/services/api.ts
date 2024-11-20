export const DEV_API = 'http://localhost:8080/api/v1';
import axios from "axios";

export const authApi = axios.create({
    baseURL: DEV_API,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
});
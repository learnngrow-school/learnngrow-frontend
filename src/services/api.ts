export const API = import.meta.env.VITE_RELEASE_API || 'http://localhost:8000/api/v1';
import axios from "axios";

export const authApi = axios.create({
	baseURL: API,
	headers: {
		'accept': 'application/json',
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

export const publicApi = axios.create({
	baseURL: API,
	headers: {
		'accept': 'application/json',
		'Content-Type': 'application/json',
	},
});

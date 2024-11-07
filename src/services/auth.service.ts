import axios from 'axios';
import { DEV_API } from './api';

const api = axios.create({
  baseURL: DEV_API,
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'content-length': '4',
  },
  withCredentials: true,
});

export const login = async (email: string, password: string): Promise<any> => {
  try {
    const response = await api.post('/auth/login', { email, password });
    
    console.log('Login status:', response);

    return response;
  } catch (error : any) {
    console.error('Login error:', error);
    return error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

import axios, { AxiosError, AxiosResponse } from 'axios';
import { DEV_API } from './api';

const api = axios.create({
  baseURL: DEV_API,
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const login = async (email: string, password: string): Promise<AxiosResponse | AxiosError> => {
  try {

    const response = await api.post('/auth/login', { email, password });
    
    console.log('Login status:', response);

    return response;
  } catch (error : any) {
    console.error('Login error:', error);
    return error as AxiosError;
  }
};

export const logout = () => {
  localStorage.removeItem('user');
};

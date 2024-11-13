import { AxiosError, AxiosResponse } from 'axios';
import { authApi } from './api';


export const login = async (email: string, password: string): Promise<AxiosResponse | AxiosError> => {
  try {

    const response = await authApi.post('/auth/login', { email, password });
    
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

export const isAuthenticated = () => localStorage.getItem('user') !== null;

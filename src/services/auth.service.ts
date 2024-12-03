import { AxiosError, AxiosResponse } from 'axios';
import { authApi } from './api';


export const login = async (email: string, password: string): Promise<AxiosResponse | AxiosError> => {
  try {

    const response = await authApi.post('/auth/login', { email, password });
    return response;
  } catch (error : any) {
    return error as AxiosError;
  }
};

export const logout = async () : Promise<AxiosResponse | AxiosError> => {
  try{

    const response = await authApi.post('/auth/logout');
    localStorage.removeItem('user');

    return response;
  }
  catch(error : any){
    return error as AxiosError;
  }
};

export const isAuthenticated = () => localStorage.getItem('user') !== null;

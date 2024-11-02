import axios from 'axios';
import { getToken } from './token.service';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'content-length': '4',
    Authorization: `Bearer ${getToken()}`, 
  },
  withCredentials: true,
});

export const login = async (email: string, password: string): Promise<any> => {
  try {
    const response = await api.post('/login', { email, password });
    
    console.log('Login status:', response);
    return response.data;
    //return token;
  } catch (error : any) {
    // console.error('Login failed:', error.status);
    return error.response?.data || error.message;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

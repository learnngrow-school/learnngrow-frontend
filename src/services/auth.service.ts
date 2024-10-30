import axios from 'axios';

const api = axios.create({
  baseURL: '/',
});

export const login = async (username: string, password: string): Promise<string | null> => {
  try {
    const response = await api.post('/login', { username, password });
    localStorage.setItem('token', response.data.token);
    return response.data.token;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

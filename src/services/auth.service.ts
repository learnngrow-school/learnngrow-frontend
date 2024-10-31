import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const login = async (email: string, password: string): Promise<string | null> => {
  axios.get('http://localhost:8080/api/status')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

  try {
    const response = await api.post('/login', { email, password });
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

import axios from 'axios';
import jwt from 'jsonwebtoken';

interface AuthResponse {
  token: string;
}

class AuthService {
  private baseUrl = '/'; 

  async login(username: string, password: string): Promise<string | null> {
    try {
      const response = await axios.post<AuthResponse>(`${this.baseUrl}/auth`, { username, password });
      return response.data.token;
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      return null;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    const token = localStorage.getItem('jwtToken');
    return !!token && !this.isTokenExpired(token);
  }

  private isTokenExpired(token: string): boolean {
    try {
      const decoded = jwt.decode(token);
      return decoded.exp * 1000 < Date.now();
    } catch (error) {
      return true;
    }
  }
}

export const authService = new AuthService();

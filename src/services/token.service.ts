import Cookies from 'js-cookie';

export const getToken = (): string | null => {
    const tokenString = Cookies.get('token');

    if (tokenString) {
      // Разбор строки токена
      const [, token] = tokenString.split('.');
      
      if (token) {
        // Теперь у вас есть чистый JWT токен
        console.log('Extracted token:', token);
        
        // Вы можете использовать этот токен дальше, например, для проверки его содержимого
        return JSON.parse(atob(token));
        }
    }
    return null;
};

export const setToken = (token: string): void => {
  Cookies.set('token', token, { expires: 30, secure: true });
};

export const clearToken = (): void => {
  Cookies.remove('token');
};

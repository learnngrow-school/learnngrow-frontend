import { AxiosResponse, AxiosError } from 'axios';
import { authApi } from './api';

// Функция для загрузки файла
export const uploadFile = async (file: File): Promise<string | AxiosError> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response: AxiosResponse = await authApi.post('/admin/files', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 201) {
      return response.data.slug;
    } else {
      throw new Error('Ошибка при загрузке файла');
    }
  } catch (error) {
    console.error('Ошибка при загрузке файла:', error);
    return error as AxiosError;
  }
};

import { AxiosError, AxiosResponse } from "axios";
import { authApi } from "./api";
import { Task } from "../types/task";

// Получить все задания
export const getTasks = async (): Promise<Task[] | AxiosError> => {
    try {
        const response = await authApi.get('/tasks/');
        
        if (Array.isArray(response.data)) {
            const correctedTasks = response.data.map((task: Task) => ({
                ...task,
            }));
            return correctedTasks;
        } else {
            throw new Error('Некорректный формат данных от сервера');
        }
    } catch (error: any) {
        console.error('Ошибка при получении заданий:', error);
        return error as AxiosError;
    }
};


// Функция для создания задания
export const createTask = async (
  title: string,
  files: string[],
  teacherNotes: string
): Promise<AxiosResponse | AxiosError> => {
  try {
    const response = await authApi.post('/tasks/', {
      title,
      fileSlug: files.join(", "), // Сливаем имена файлов в строку (если необходимо)
      teacherNotes
    });

    return response;
  } catch (error: any) {
    console.error('Ошибка при создании задания:', error);
    return error as AxiosError;
  }
};


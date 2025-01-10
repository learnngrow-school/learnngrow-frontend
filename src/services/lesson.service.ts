import { AxiosResponse, AxiosError } from "axios";
import Lesson from "../types/lesson";
import { authApi } from "./api";

export const createLesson = async (lesson: Lesson) : Promise<AxiosResponse | AxiosError> => {
    try{
        const response = await authApi.post('/lessons/', lesson);
            
        console.log('Lesson creation status:', response);
        
        return response;
    }
    catch(error : any){
        console.error('Lesson creation error:', error);
        return error as AxiosError;
    }
};

export const getLessons = async (): Promise<Lesson[] | AxiosError> => {
    try {
        const response = await authApi.get('/lessons/0');
        console.log('Fetched lessons:', response.data);

        // Преобразуем временные метки
        if (Array.isArray(response.data)) {
            const correctedLessons = response.data.map((l: Lesson) => ({
                ...l,
                timestamp: Number(l.timestamp) * 1000, // Преобразуем секунды в миллисекунды
            }));
            return correctedLessons;
        } else {
            throw new Error('Некорректный формат данных от сервера');
        }
    } catch (error: any) {
        console.error('Error fetching lessons:', error);
        return error as AxiosError;
    }
};
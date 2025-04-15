import { AxiosResponse, AxiosError } from "axios";
import Lesson from "../types/lesson";
import { authApi } from "./api";

export const createLesson = async (lesson: Lesson) : Promise<AxiosResponse | AxiosError> => {
    try{
        const response = await authApi.post('/lessons/', lesson);
        console.log(lesson.subjectId)
        return response;
    }
    catch(error : any){
        return error as AxiosError;
    }
};

export const getLessons = async (weekOffset: number): Promise<Lesson[] | AxiosError> => {
    try {
        const response = await authApi.get(`/lessons/${weekOffset}`);

        if (Array.isArray(response.data)) {
            return response.data.map((l: Lesson) => ({
                ...l,
                timestamp: Number(l.timestamp) * 1000,
            }));
        } else {
            throw new Error("Некорректный формат данных от сервера");
        }
    } catch (error: any) {
        console.error("Error fetching lessons:", error);
        return error as AxiosError;
    }
};

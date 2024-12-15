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
}
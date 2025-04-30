import { AxiosResponse, AxiosError } from "axios";
import { authApi } from "./api";
import { Lecture } from "../types/lecture";

export const createLectureContent = async (content: Lecture, id: string) : Promise<AxiosResponse | AxiosError> => {
    try{
        const response = await authApi.post(`/courses/${id}/contents/lectures/`, content);
            
        console.log('lectures creation status:', response);
        
        return response;
    }
    catch(error : any){
        console.error('lectures creation error:', error);
        return error as AxiosError;
    }
}

export const getLectureContent = async (id: string) : Promise<AxiosResponse | AxiosError> => {
    try {
        
        const response = await authApi.get(`/courses/${id}/contents/lectures/`);
        return response;
    }
    catch (error : any){
        return error as AxiosError;
    }
};
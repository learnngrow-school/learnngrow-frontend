import { AxiosResponse, AxiosError } from "axios";
import { authApi } from "./api";
import { CourseContent } from "../types/course-content";

export const createCourseContent = async (content: CourseContent, id: string) : Promise<AxiosResponse | AxiosError> => {
    try{
        const response = await authApi.post(`/courses/${id}/contents/`, content);
            
        console.log('CourseContent creation status:', response);
        
        return response;
    }
    catch(error : any){
        console.error('CourseContent creation error:', error);
        return error as AxiosError;
    }
}

export const getCourseContent = async (id: string) : Promise<AxiosResponse | AxiosError> => {
    try {
        
        const response = await authApi.get(`/courses/${id}/contents/`);
        return response;
    }
    catch (error : any){
        return error as AxiosError;
    }
};
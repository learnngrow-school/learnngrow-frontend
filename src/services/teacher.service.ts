import { AxiosResponse, AxiosError } from "axios"
import { publicApi, authApi } from "./api"
import {User} from "../types/user"

export const getTeachers = async () : Promise<AxiosResponse | AxiosError> => {
    try {
        
        const response = await publicApi.get('/teachers/');
        return response;
    }
    catch (error : any){
        return error as AxiosError;
    }
};

export const createTeacher = async (teacher: User) : Promise<AxiosResponse | AxiosError> => {
    try{
        const response = await authApi.post('/teachers/', teacher);
            
        console.log('Teacher creation status:', response);
        
        return response;
    }
    catch(error : any){
        console.error('Teacher creation error:', error);
        return error as AxiosError;
    }
}


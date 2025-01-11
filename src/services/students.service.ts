import { AxiosResponse, AxiosError } from "axios";
import { authApi } from "./api";

export const getAllStudents = async () : Promise<AxiosResponse | AxiosError> => {
    try {
        
        const response = await authApi.get('/students/');
        console.log('Get students status:', response);
        return response;
    }
    catch (error : any){
        console.error('Get students error:', error);
        return error as AxiosError;
    }
};
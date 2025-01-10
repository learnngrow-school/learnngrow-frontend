import { AxiosResponse, AxiosError } from "axios";
import { authApi, publicApi } from "./api";

export const createSubject = async (subject: any) : Promise<AxiosResponse | AxiosError> => {
    try{
        const response = await authApi.post('/admin/subjects', subject);
            
        console.log('Subject creation status:', response);
        
        return response;
    }
    catch(error : any){
        console.error('Subject creation error:', error);
        return error as AxiosError;
    }
}

export const getSubjects = async () : Promise<AxiosResponse | AxiosError> => {
    try {
        
        const response = await publicApi.get('/admin/subjects');
        return response;
    }
    catch (error : any){
        return error as AxiosError;
    }
};
import { AxiosResponse, AxiosError } from "axios";
import { authApi } from "./api";

export const createAssignments = async (assignments: any) : Promise<AxiosResponse | AxiosError> => {
    try{
        const response = await authApi.post('/assignments/', assignments);
            
        console.log('Assignments creation status:', response);
        
        return response;
    }
    catch(error : any){
        console.error('Subject creation error:', error);
        return error as AxiosError;
    }
}

export const getAssignments = async (id: string) : Promise<AxiosResponse | AxiosError> => {
    try {
        
        const response = await authApi.get(`/assignments/${id}`);
        return response;
    }
    catch (error : any){
        return error as AxiosError;
    }
};
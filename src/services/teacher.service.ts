import { AxiosResponse, AxiosError } from "axios"
import { publicApi } from "./api"

export const getTeachers = async () : Promise<AxiosResponse | AxiosError> => {
    try {
        
        const response = await publicApi.get('/teachers');
        return response;
    }
    catch (error : any){
        return error as AxiosError;
    }
};
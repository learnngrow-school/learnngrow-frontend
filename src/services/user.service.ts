import { AxiosResponse, AxiosError } from "axios"
import { User } from "../types/user"
import { authApi } from "./api"

export const createUser = async (user : User) : Promise<AxiosResponse | AxiosError> => {
    try{

        const response = await authApi.post('/auth/register', user);
        
        console.log('Register status:', response);
    
        return response;
    }
    catch(error : any){
        console.error('Register error:', error);
        return error as AxiosError;
    }
}

export const getUser = async () : Promise<AxiosResponse | AxiosError> => {
    try{

        const response = await authApi.get('/auth/me');
        
        console.log('Get user status:', response);
        localStorage.setItem('user', JSON.stringify(response.data));
    
        return response;
    }
    catch(error : any){
        console.error('Get user error:', error);
        return error as AxiosError;
    }
}
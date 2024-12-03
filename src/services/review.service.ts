import { AxiosResponse, AxiosError } from "axios"
import { publicApi } from "./api"

export const getReviews = async () : Promise<AxiosResponse | AxiosError> => {
    try {
        
        const response = await publicApi.get('/reviews');
        //console.log('Get reviews status:', response);
        
        return response;
    }
    catch (error : any){
        return error as AxiosError;
    }
};
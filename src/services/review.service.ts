import { AxiosResponse, AxiosError } from "axios"
import { authApi, publicApi } from "./api"

export const getReviews = async () : Promise<AxiosResponse | AxiosError> => {
    try {
        
        const response = await publicApi.get('/reviews/');
        //console.log('Get reviews status:', response);
        
        return response;
    }
    catch (error : any){
        return error as AxiosError;
    }
};

export const createReview = async (review: any) : Promise<AxiosResponse | AxiosError> => {
    try{
        const response = await authApi.post('/reviews/', review);
            
        console.log('Review creation status:', response);
        
        return response;
    }
    catch(error : any){
        console.error('Review creation error:', error);
        return error as AxiosError;
    }
}
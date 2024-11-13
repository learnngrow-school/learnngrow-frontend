import { useEffect } from 'react';
import '../../styles/text.css'
import { User } from '../../types/user';
import { getUser } from '../../services/user.service';
import { AxiosError } from 'axios';

const PersonalAccount = () => {
    const fetchUser = async () => {
        const response = await getUser();
        if (!(response instanceof AxiosError)) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        else{
            return (
                <div>
                    <h1 className='text--heading1'>Личный кабинет</h1>
                    <p>You are not logged in {":("}</p>
                </div>
            )
        }
    }

    useEffect(() => {
        if(!localStorage.getItem('user'))
            fetchUser();
    })


    const parsedUser = JSON.parse(localStorage.getItem('user') || '') as User;

    return (
        <div>
            <h1 className='text--heading1'>Личный кабинет</h1>
                <div>
                    <div className='text--heading3 text-300'>
                      {"Hello, " + parsedUser.firstName + " " + parsedUser.lastName + " " + parsedUser.middleName + "!"}
                    </div>
                </div>
               
        </div>
    )
}

export default PersonalAccount
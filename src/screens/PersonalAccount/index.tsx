import { useEffect, useState } from 'react';
import '../../styles/text.css'
import { User } from '../../types/user';
import { getUser } from '../../services/user.service';
import { AxiosError } from 'axios';
import BaseButton from '../../shared/Buttons/BaseButton';
import { logout } from '../../services/auth.service';
import AcceptModal from '../../shared/Modals/AcceptModal';
import { urls } from '../../navigation/app.urls';
import { useNavigate } from 'react-router-dom';

const PersonalAccount = () => {
    const [acceptModalVisible, setAcceptModalVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('user'))
            fetchUser();
    }, [acceptModalVisible])

    const fetchUser = async () => {
        const response = await getUser();
        if (!(response instanceof AxiosError)) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        else{
            return (
                <div>
                    <h1 className='text--heading2'>Личный кабинет</h1>
                    <p>Вы не авторизованы {":("}</p>
                </div>
            )
        }
    }

    const showAcceptModal = () => {
        setAcceptModalVisible(true);
    }

    const onLogout = () => {
        logout();
        navigate(urls.main);
    }

    const onLogoutCancel = () => {
        setAcceptModalVisible(false);
    }

    const parsedUser = JSON.parse(localStorage.getItem('user') || '') as User;

    return (
        <div>
            <h1 className='text--heading2 text--blue text-600'>Мои данные</h1>
                <div>
                    <div className="textInputContainer">
                       <div className='text--body-s text--blue text-600'>Имя</div>
                        {parsedUser.firstName}
                    </div>
                    <div className="textInputContainer">
                        <div className='text--body-s text--blue text-600'>Фамилия</div>
                        {parsedUser.lastName}
                    </div>
                    <div className="textInputContainer">
                        <div className='text--body-s text--blue text-600'>Отчество (если есть)</div>
                        {parsedUser.middleName || 'Нет'}
                    </div>
                    <div className="textInputContainer">
                        <div className='text--body-s text--blue text-600'>Почта</div>
                        {parsedUser.email}
                    </div>
                </div>
            <BaseButton data-bs-toggle="modal" data-bs-target="#staticBackdrop" 
                theme="pink-primary" text="Выйти из аккаунта" className="text--body-s" 
                onClick={showAcceptModal}/>
            
            <AcceptModal id="staticBackdrop"
            isOpen={acceptModalVisible}
            content="Вы точно хотите выйти из аккаунта?" 
            okText='Выход' onOk={onLogout} onCancel={onLogoutCancel}/>
        </div>
    )
}

export default PersonalAccount
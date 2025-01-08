import { useEffect, useState, useRef } from 'react';
import '../../../styles/text.css'
import "./myData.css"
import { User } from '../../../types/user';
import { getUser } from '../../../services/user.service';
import { AxiosError } from 'axios';
import BaseButton from '../../../shared/Buttons/BaseButton';
import { logout } from '../../../services/auth.service';
import AcceptModal from '../../../shared/Modals/AcceptModal';
import { urls } from '../../../navigation/app.urls';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../../shared/Inputs/TextInput';
import ToastPopup, { INotify } from '../../../shared/ToastPopup';
import { ToastTypeEnum } from '../../../enums/popup';
import AvatarInput from '../../../shared/Inputs/AvatarInput';

const MyData = () => {
    const [acceptModalVisible, setAcceptModalVisible] = useState(false);
    const [editDisabled, setEditDisabled] = useState(true);
    const [editText, setEditText] = useState('Изменить данные');
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState('');

    const toastRef = useRef<INotify>(null);

    useEffect(() => {
        if(!localStorage.getItem('user'))
            fetchUser();
    }, [acceptModalVisible])

    

    const showNotification = (message: string, type: ToastTypeEnum) => {
      if (toastRef.current) {
        toastRef.current.notify(message, type);
      }
    };

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

    const onAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setAvatar(URL.createObjectURL(file));
        }
      };

    const showAcceptModal = () => {
        setAcceptModalVisible(true);
    }

    const onLogout = async () => {
        const response = await logout();
        if(!(response instanceof AxiosError) && response.status === 200)
        {
            
            showNotification("Вы успешно вышли из аккаунта", ToastTypeEnum.success);
            navigate(urls.main);
        }
        else {
            setAcceptModalVisible(false);
            showNotification("Не удалось выйти из аккаунта", ToastTypeEnum.error);
        } 
    }

    const onLogoutCancel = () => {
        setAcceptModalVisible(false);
    }

    const onEditModeChange = () => {
        if(editDisabled)
        {
            setEditText('Отменить изменения');
            setEditDisabled(false);
        } 
        else 
        {
            setEditText('Изменить данные');
            setEditDisabled(true);
        }
    }

    const parsedUser = JSON.parse(localStorage.getItem('user') || '') as User;

    return (
        <div>
            <ToastPopup ref={toastRef} />
            <h1 className='text--heading2 text--blue text-600'>Мои данные</h1>
                <div className='my-data-content'>
                    <AvatarInput avatar={avatar} onAvatarChange={onAvatarChange} />
                    <div className='inputs-container'>
                        <div className="input-container">
                            <div className='text--body-s text--blue text-600'>Фамилия</div>
                            <TextInput defaultValue={parsedUser.lastName} 
                                disabled={editDisabled} 
                                type='text' id='lastName' placeholder='Фамилия'/>
                        </div>

                        <div className="input-container">
                            <div className='text--body-s text--blue text-600'>Имя</div>
                            <TextInput defaultValue={parsedUser.firstName} 
                                disabled={editDisabled} 
                                type='text' id='firstName' placeholder='Имя'/>
                        </div>
                        <div className="input-container">
                            <div className='text--body-s text--blue text-600'>Отчество (если есть)</div>
                            <TextInput defaultValue={parsedUser.middleName || '-'} 
                                disabled={editDisabled} 
                                type='text' id='middleName' placeholder='Отчество'/>
                        </div>
                        <div className="input-container">
                            <div className='text--body-s text--blue text-600'>Номер телефона</div>
                            <TextInput defaultValue={parsedUser.phone || '-'} 
                                disabled={editDisabled} 
                                type='text' id='phone' placeholder='Почта'/>
                        </div>
                    </div>

                    <div className='buttons-container'>
                        <BaseButton
                            theme="pink-primary" text={editText}
                            onClick={onEditModeChange}/>
                        <BaseButton data-bs-toggle="modal" data-bs-target="#staticBackdrop" 
                            theme="white-secondary" text="Выйти из аккаунта" className="text--body-s" 
                            onClick={showAcceptModal}/>
                    </div>
                </div>
            <AcceptModal id="staticBackdrop"
                isOpen={acceptModalVisible}
                content={<div>Вы точно хотите выйти<br />из аккаунта?</div>} 
                okText='Да, выйти' onOk={onLogout} 
                cancelText='Нет, остаться' onCancel={onLogoutCancel}/>
        </div>
    )
}

export default MyData
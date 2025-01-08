import TextInput from "../../../../../shared/Inputs/TextInput"
import BaseButton from "../../../../../shared/Buttons/BaseButton"
import { useNavigate} from "react-router-dom"
import {urls} from "../../../../../navigation/app.urls"
import {useForm } from "react-hook-form"
import { createTeacher } from "../../../../../services/teacher.service"
import { User } from "../../../../../types/user"
import { useState } from "react"
import TextError from "../../../../../shared/Errors/TextError"
import { AxiosError } from "axios"
import { ERROR_RUS } from "../../../../../shared/Errors/errorTypes"
import Arrow from "../../../../../assets/icons/back-arrow.svg"
import './creation.css'
import AvatarInput from "../../../../../shared/Inputs/AvatarInput"

interface ITeacher{
    firstName?: string,
    lastName?: string,
    middleName?: string,
    phone?: string,
    password: string,
    isTeacher?: string | boolean
}

const TeacherCreation = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [avatar, setAvatar] = useState('');
    const { register, handleSubmit, formState: { errors }} = useForm<ITeacher | any>();

    const onTeacherCreateClick = async (data: ITeacher) => {
        setLoading(true);
        const response = await createTeacher(data as unknown as User);
        
        if (!(response instanceof AxiosError)) {
            navigate(urls.teachers);
        }
        else {
            const errorRus = ERROR_RUS[response.message as string]
            setError( errorRus? errorRus : 'Ошибка сети');
        }
        setLoading(false);   
        
    }

    const onCancelClick = () => {
        navigate(urls.teachers)
    }

    const onAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setAvatar(URL.createObjectURL(file));
        }
      };

    return (
        <form className="px-4 py-3 teacher-creation-form" onSubmit={handleSubmit(onTeacherCreateClick)}>
        <div className="back-all-teachers-block" onClick={onCancelClick}>
            <img src={Arrow} alt="назад" />
            <div className="text--body-s text-400">Все преподаватели</div>
        </div>
        <div className="teachers-creation-grid">
            <div>
                <div className="text--heading2 text-600 text--blue teacher-add-title">Добавление преподавателя</div>
            
                <div className="text--blue text-body-s text-600 teacher-input-label">Фамилия</div>
                <TextInput placeholder={"Введите фамилию"} type="text" id={"lastName"} 
                    register={{...register('lastName',{required: "Введите фамилию"}) }}
                    error={errors.lastName} containerClassName="teacher-info-input-container"/>
                
                <div className="text--blue text-body-s text-600 teacher-input-label">Имя</div>
                <TextInput placeholder={"Введите имя"} type="text" id={"firstName"} 
                    register={{...register('firstName',{required: "Введите имя"})}}
                    error={errors.firstName} containerClassName="teacher-info-input-container"/>
                
                <div className="text--blue text-body-s text-600 teacher-input-label">Отчество</div>
                <TextInput placeholder={"Введите отчество"} type="text" id={"middleName"} 
                    register={register('middleName')} containerClassName="teacher-info-input-container"/>

                <div className="text--blue text-body-s text-600 teacher-input-label">Номер телефона</div>
                <TextInput placeholder={"Введите номер телефона"} type="phone" id={"phone"} 
                    register={register('phone', {required: "Введите номер телефона"})}
                    error={errors.phone} containerClassName="teacher-info-input-container"/>

                <div className="text--blue text-body-s text-600 teacher-input-label">Пароль</div>
                <TextInput placeholder={"Введите пароль"} type="phone" id={"password"} 
                    register={register('password',{required: "Введите пароль"})}
                    error={errors.password} containerClassName="teacher-info-input-container"/>
                <TextError text={error || ''} />
                <BaseButton theme="pink-primary" text={loading ? "Добавление..." : "Добавить преподавателя"} type='submit' className="teacher-add-btn"/>
            </div>
            <div className="teacher-grid-second-column">
                <AvatarInput avatar={avatar} onAvatarChange={onAvatarChange}/>
            </div>
        </div>
        </form>
    )
}

export default TeacherCreation
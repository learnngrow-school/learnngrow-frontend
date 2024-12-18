import TextInput from "../../../../shared/Inputs/TextInput"
import BaseButton from "../../../../shared/Buttons/BaseButton"
import { useNavigate} from "react-router-dom"
import {urls} from "../../../../navigation/app.urls"
import {useForm } from "react-hook-form"
import { createTeacher } from "../../../../services/teacher.service"
import { User } from "../../../../types/user"
import { useState } from "react"
import TextError from "../../../../shared/Errors/TextError"
import { AxiosError } from "axios"
import { ERROR_RUS } from "../../../../shared/Errors/errorTypes"

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

    return (
        <form className="px-4 py-3 registryForm" onSubmit={handleSubmit(onTeacherCreateClick)}>
        <div className="text--heading3 text-600">Добавление преподавателя</div>
        
        <TextInput placeholder={"Введите фамилию"} type="text" id={"lastName"} 
            register={{...register('lastName',{required: "Введите фамилию"}) }}
            error={errors.lastName}/>

        <TextInput placeholder={"Введите имя"} type="text" id={"firstName"} 
            register={{...register('firstName',{required: "Введите имя"})}}
            error={errors.firstName}/>

        <TextInput placeholder={"Введите отчество"} type="text" id={"middleName"} 
            register={register('middleName')}/>

        <TextInput placeholder={"Введите номер телефона"} type="phone" id={"phone"} 
            register={register('phone', {required: "Введите номер телефона"})}
            error={errors.phone}/>

        <TextInput placeholder={"Введите пароль"} type="phone" id={"password"} 
            register={register('password',{required: "Введите пароль"})}
            error={errors.password}/>

        <BaseButton theme="pink-primary" text={loading ? "Добавление..." : "Добавить"} type='submit'/>
        <BaseButton theme="white-primary" text={"Вернуться назад"} onClick={onCancelClick}/>
        <TextError text={error || ''} />
        </form>
    )
}

export default TeacherCreation
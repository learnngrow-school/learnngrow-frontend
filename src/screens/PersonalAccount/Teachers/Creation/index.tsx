import TextInput from "../../../../shared/Inputs/TextInput"
import BaseButton from "../../../../shared/Buttons/BaseButton"
import { useNavigate} from "react-router-dom"
import {urls} from "../../../../navigation/app.urls"
import { useForm } from "react-hook-form"
import { createTeacher } from "../../../../services/teacher.service"
import { User } from "../../../../types/user"
import { AxiosError } from "axios"

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
    //const [loading, setLoading] = useState(false);
    //const [error, setError] = useState<string | null>(null);
    const { register, handleSubmit} = useForm<ITeacher | any>();

    const onTeacherCreateClick = async (data: ITeacher) => {

        const response = await createTeacher(data as unknown as User)
        console.log(response)
        if (! (response instanceof AxiosError) && response.status === 200) {
            navigate(urls.teachers)
        }
    }

    const onCancelClick = () => {
        navigate(urls.teachers)
    }

    return (
        <form className="px-4 py-3 registryForm" onSubmit={handleSubmit(onTeacherCreateClick)}>
        <div className="text--heading3 text-600">Добавление преподавателя</div>
        
        <TextInput placeholder={"Введите фамилию"} type="text" id={"lastName"} register={{...register('lastName')}}/>
        <TextInput placeholder={"Введите имя"} type="text" id={"firstName"} register={{...register('firstName')}}/>
        <TextInput placeholder={"Введите отчество"} type="text" id={"middleName"} register={register('middleName')}/>
        <TextInput placeholder={"Введите номер телефона"} type="phone" id={"phone"} register={register('phone')}/>
        <TextInput placeholder={"Введите пароль"} type="phone" id={"password"} register={register('password')}/>
        <BaseButton theme="pink-primary" text={"Добавить"} type='submit'/>
        <BaseButton theme="white-primary" text={"Вернуться назад"} onClick={onCancelClick}/>
        </form>
    )
}

export default TeacherCreation
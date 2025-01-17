import { useNavigate } from 'react-router-dom'
import TextError from '../../shared/Errors/TextError'
import TextLink from '../../shared/Text/TextLink'
import '../../styles/text.css'
import { urls } from '../../navigation/app.urls'
import { useForm } from 'react-hook-form'
import BaseButton from '../../shared/Buttons/BaseButton'
import '../Registration/registration.css'
import { createUser } from '../../services/user.service'
import { AxiosError } from 'axios'
import { User } from '../../types/user'
import { ERROR_RUS } from '../../shared/Errors/errorTypes'
import { useState } from 'react'
import PasswordInput from '../../shared/Inputs/PasswordInput'
import TextInput from '../../shared/Inputs/TextInput'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface IUser{
    firstName?: string,
    lastName?: string,
    middleName?: string,
    phone?: string,
    password: string
    passwordCheck: string
}

const passwordSchema = yup.object().shape({
    firstName: yup.string()
      .required("Это поле не может быть пустым")
      .min(2, "Минимальная длина 2 символа")
      .max(20, "Максимальная длина 20 символов")
      .matches(
        /^[A-ZА-Я]/,
        "Имя должно начинаться с заглавной буквы"
      )
      .matches(
        /^[a-zA-ZА-ЯЁа-яё-’—']+$/,
        "Текст содержит недопустимые символы"
      ),
    lastName: yup.string()
        .required("Это поле не может быть пустым")
        .min(2, "Минимальная длина 2 символа")
        .max(20, "Максимальная длина 20 символов")
        .matches(
            /^[A-ZА-Я]/,
            "Фамилия должна начинаться с заглавной буквы"
        )
        .matches(
            /^[a-zA-ZА-ЯЁа-яё-’—]+$/,
            "Текст содержит недопустимые символы"
        ),
    phone: yup.string().required("Это поле не может быть пустым"),
    password: yup.string()
        .required("Это поле не может быть пустым")
        .min(8, "Минимальная длина пароля 8 символов")
        .max(20, "Максимальная длина пароля 20 символов")
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
            "Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву и одну цифру."),
    passwordCheck: yup.string()
      .required("Это поле не может быть пустым")
      .test({
        name: "matchPassword",
        message: () =>
          `Пароли не совпадают`,
        test: (value : string, context : any) => value === context.parent.password
      }),
        
  });

const Registration = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors } } = useForm<IUser | any>({
        resolver: yupResolver(passwordSchema)
      });

    const onSubmit = async (data: IUser) => {

        const response = await createUser(data as unknown as User);

        if (!(response instanceof AxiosError)) {
            localStorage.setItem('user', JSON.stringify(response.data));
            navigate(urls.myData);
        }
        else{
            const errorRus = ERROR_RUS[response.message as string]
            setError(errorRus ? errorRus : 'Неизвестная ошибка');

            setLoading(false);
        }
      };

    return (
    <>
        <form className="px-4 py-3 registryForm" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text--heading2 title text-600">Зарегистрироваться</h1>
            <TextInput placeholder={"Введите фамилию"} type="text" id={"lastname"}
            register={register('lastName')} error={errors.lastName}/>

            <TextInput placeholder={"Введите имя"} type="text" id={"firstname"}
             register={register('firstName')} error={errors.firstName}/>

            <TextInput placeholder={"Введите отчество"} type="text" id={"middlename"}
             register={register('middleName')} error={errors.middleName}/>

            <TextInput placeholder='Введите номер телефона' type='phone' id='phone'
             register={register('phone')} error={errors.phone}/>

            <PasswordInput 
                id="inputPassword"
                placeholder="Введите пароль"
                register={register('password')} error={errors.password}/>

            <PasswordInput 
                id="inputPasswordCheck"
                placeholder="Повторите пароль"
                register={register('passwordCheck')} error={errors.passwordCheck}/>
            
            <div className="registryContainer">
            <BaseButton text={loading? 'Загрузка...' : 'Зарегистрироваться'} theme='pink-secondary' className="registryButton"
                    type='submit'/>
            </div>

            <div className="formError">{error && <TextError text={error}/>}</div>

            <hr/>
            <div className="loginContainer">
                <div className="text--body-l">Уже есть аккаунт?</div>
                <TextLink path={urls.auth} name='Войти'/>
            </div>
        </form>
    </>
)
}

export default Registration

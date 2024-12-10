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
            throw new Error('Invalid credentials');
            
        }
      };

    return (
    <>
        <form className="px-4 py-3 registryForm" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text--heading2 title">Зарегистрироваться</h1>

            <div className="textInputContainer">
                <input type="text" className="form-control inputText" id="lastname"
                placeholder="Введите фамилию"
                {...register('lastName')} />
                {<TextError text={errors.lastName?.message?.toString() || ''}/>}
            </div>

            <div className="textInputContainer">
                <input type="text" className="form-control inputText" id="firstname"
                placeholder="Введите имя"
                {...register('firstName')} />
                {<TextError text={errors.firstName?.message?.toString() || ''}/>}
            </div>

            <div className="textInputContainer">
                <input type="text" className="form-control inputText" id="middlename"
                placeholder="Введите отчество"
                {...register('middleName')} />
                {<TextError text={errors.middleName?.message?.toString() || ''}/>}
            </div>

            <div className="textInputContainer">
                <input type="phone" className="form-control inputText" id="phone"
                placeholder="Введите свой номер телефона"
                {...register('phone')} />
                {<TextError text={errors.phone?.message?.toString() || ''}/>}
            </div>

            <div className="textInputContainer">
                <PasswordInput 
                    inputId="inputPassword"
                    children={
                    <input type="password" className="form-control inputText" id="inputPassword" 
                        placeholder="Введите пароль"
                        {...register('password')}>
                    </input>}/>
                
                {<TextError text={errors.password?.message?.toString() || ''}/>}
            </div>

            <div className="textInputContainer">
                <PasswordInput 
                    inputId="inputPasswordCheck"
                    children={
                    <input type="password" className="form-control inputText" id="inputPasswordCheck" 
                    placeholder="Повторите пароль"
                    {...register('passwordCheck', 
                    )
                    }/>}
                />
                {<TextError text={errors.passwordCheck?.message?.toString() || ''}/>}
            </div>
            
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

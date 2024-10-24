import { urls } from "../../navigation/app.urls"
import { useNavigate } from "react-router-dom"
import BaseButton from "../../shared/Buttons/BaseButton"
import './auth.css'
import '../../styles/text.css'
import { useForm } from 'react-hook-form';
import TextLink from "../../shared/Text/TextLink"
import TextError from "../../shared/Errors/TextError"
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { authService } from "../../services/auth.service"
import { useState } from "react"

const Login= () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    // const onSubmit = async (data: any) => {
    //     try {

    //         console.log(`логин: ${data.username}`);

    //         navigate(urls.user)
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        const token = await authService.login(username, password);
        if (token) {
            localStorage.setItem('jwtToken', token);
        }
        } catch (error) {
        console.error('Ошибка авторизации:', error);
        }
    };
      

    return (
        <>
        <form className="px-4 py-3 authForm" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text--heading2">Войти</h1>
            <div className="mb-3">
                <input type="text" className="form-control inputText" id="username"
                placeholder="Введите имя пользователя или email"
                {...register('username', { required: "Это поле не может быть пустым" })} />
                {<TextError text={errors.username?.message?.toString() || ''}/>}
            </div>
            <div className="mb-3">
                <input type="password" className="form-control inputText" id="inputPassword" 
                placeholder="Введите пароль"
                {...register('password', { required: "Это поле не может быть пустым" })}/>
                {<TextError text={errors.password?.message?.toString() || ''}/>}
            </div>
            <div className="mb-3 rememberLoginContainer">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input checkbox-lng" id="authFormCheck"/>
                    <label className="form-check-label" htmlFor="authFormCheck">
                    <div>Запомнить меня</div>
                    </label>
                </div>
                <BaseButton text='Войти' theme='pink' className="loginButton"
                    type='submit'/>
            </div>
            <hr/>
            <div className="buttonsContainer">
                <div className="registryContainer">
                    <div className="text--body-l">Нет аккаунта?</div>
                    <TextLink path={urls.registration} name='Зарегистрироваться'/>
                </div>
                <div className="text--body-l">Забыли пароль?</div>
            </div>
        </form>
        </>
    )
}

export default Login
import { urls } from "../../navigation/app.urls"
import { useNavigate } from "react-router-dom"
import BaseButton from "../../shared/Buttons/BaseButton"
import './auth.css'
import '../../styles/text.css'
import { useForm } from 'react-hook-form';
import TextLink from "../../shared/Text/TextLink"
import TextError from "../../shared/Errors/TextError"
import { useState } from "react"
import { login } from "../../services/auth.service"
import { useDispatch } from "react-redux"
import { setToken } from "../../store/auth.slice"
import { getToken } from "../../services/token.service"
import { ERROR_RUS } from "../../shared/Errors/errorTypes"

interface IAuthFormValues {
    email: string;
    password: string;
  }

const Auth = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors } } = useForm<IAuthFormValues>();
    const dispatch = useDispatch();

    const onSubmit = async (data: IAuthFormValues) => {
        console.log(`Trying to login: ${data.email}, ${data.password}`);
        setLoading(true);
        setError(null);
        try {
        //   const token = await login(data.email, data.password);
        //   if (!token) throw new Error('Invalid credentials');
        //   else {
        //     dispatch(setToken(token));
        //     navigate(urls.user);
        //   }
        const response = await login(data.email, data.password);

        // setStatusResponce(status);

        const token = getToken();

        console.log('response:', response['error']);
        

        // if (!token) throw new Error('Invalid credentials');
        if(response['error']) {
            // if (response in ERROR_RUS) setError(ERROR_RUS[response]);
            // else {
            const parsedError = response['error'];
            setError(ERROR_RUS[parsedError]);
            //}
            
            throw new Error('Invalid credentials');
        }
        else {
          console.log('Token:', token);
          dispatch(setToken(response));
        //   dispatch(setToken(token));
          navigate(urls.user);
        }
        } catch (err: any) {
            console.log(err);
            // setError('Ошибка авторизации');
        } finally {
          setLoading(false);
        }
      };
      

    return (
        <>
        <form className="px-4 py-3 authForm" onSubmit={handleSubmit(onSubmit)}>

            <h1 className="text--heading2 title">Войти</h1>

            <div className="textInputContainer">
                <input type="email" className="form-control inputText" id="email"
                placeholder="Введите адрес электронной почты"
                {...register('email', { required: "Это поле не может быть пустым" })} />
                {<TextError text={errors.email?.message?.toString() || ''}/>}
            </div>
            
            <div className="textInputContainer">
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
                <BaseButton text={loading ? 'Загрузка...' : 'Войти'} theme='pink' className="loginButton" 
                    type='submit'/>
            </div>

            <div className="formError">{error && <TextError text={error}/>}</div>
            
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

export default Auth
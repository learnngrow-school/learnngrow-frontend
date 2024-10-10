import { urls } from "../../navigation/app.urls"
import { useNavigate } from "react-router-dom"
import BaseButton from "../../shared/Buttons/BaseButton"
import './auth.css'
import '../../styles/text.css'
import { useForm } from 'react-hook-form';
import TextLink from "../../shared/Text/TextLink"

const Auth = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data :any) => {
        try {
            // const salt = CryptoJS.lib.WordArray.random(16);
            // const key = CryptoJS.SHA256(data.password.plainText + salt.toString()).toString();
            
            // // Шифрование пароля
            // const encrypted = CryptoJS.AES.encrypt(data.password.plainText, key);
            // console.log(`логин: ${data.username}`);
            // console.log(`соль: ${CryptoJS.enc.Base64.stringify(salt)}
            //      пароль:${encrypted}`);

            navigate(urls.user)
        } catch (error) {
          console.error(error);
        }
      };
      

    return (
        <>
        <form className="px-4 py-3 authForm" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text--heading2">Войти</h1>
            <div className="mb-3">
                <input type="text" className="form-control" id="username"
                placeholder="Введите имя пользователя или email"
                {...register('username', { required: "Это поле не может быть пустым" })} />
                {<p>{errors.username?.message?.toString()}</p>}
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" id="inputPassword" 
                placeholder="Введите пароль"
                {...register('password', { required: "Это поле не может быть пустым" })}/>
                {<p>{errors.password?.message?.toString()}</p>}
            </div>
            <div className="mb-3 rememberLoginContainer">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="authFormCheck"/>
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

export default Auth
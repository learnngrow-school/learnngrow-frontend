import { useNavigate } from 'react-router-dom'
import TextError from '../../shared/Errors/TextError'
import TextLink from '../../shared/Text/TextLink'
import '../../styles/text.css'
import { urls } from '../../navigation/app.urls'
import { useForm } from 'react-hook-form'
import BaseButton from '../../shared/Buttons/BaseButton'
import '../Registration/registration.css'

const Registration = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        try {

            console.log(`Зарегистрирован пользователь: ${data.email}`);

            navigate(urls.auth)
        } catch (error) {
          console.error(error);
        }
      };

    return (
    <>
        <form className="px-4 py-3 authForm" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text--heading2">Зарегистрироваться</h1>
            <div className="mb-3">
                <input type="email" className="form-control inputText" id="email"
                placeholder="Введите свой email"
                {...register('email', { required: "Это поле не может быть пустым" })} />
                {<TextError text={errors.email?.message?.toString() || ''}/>}
            </div>
            <div className="mb-3">
                <input type="text" className="form-control inputText" id="username"
                placeholder="Введите имя пользователя"
                {...register('username', { required: "Это поле не может быть пустым" })} />
                {<TextError text={errors.username?.message?.toString() || ''}/>}
            </div>
            <div className="mb-3">
                <input type="password" className="form-control inputText" id="inputPassword" 
                placeholder="Введите пароль"
                {...register('password', { required: "Это поле не может быть пустым" })}/>
                {<TextError text={errors.password?.message?.toString() || ''}/>}
            </div>
            <div className="mb-3">
                <input type="password" className="form-control inputText" id="inputPasswordCheck" 
                placeholder="Повторите пароль"
                {...register('passwordCheck', { required: "Это поле не может быть пустым" })}/>
                {<TextError text={errors.passwordCheck?.message?.toString() || ''}/>}
            </div>
            <div className="mb-3 rememberLoginContainer">
                <BaseButton text='Зарегистрироваться' theme='pink' className="loginButton"
                    type='submit'/>
            </div>
            <hr/>
            <div className="buttonsContainer">
                <div className="registryContainer">
                    <div className="text--body-l">Уже есть аккаунт?</div>
                    <TextLink path={urls.auth} name='Войти'/>
                </div>
            </div>
        </form>
    </>
)
}

export default Registration
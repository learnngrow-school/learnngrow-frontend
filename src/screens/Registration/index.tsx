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

            console.log(`Зарегистрирован пользователь: ${data.firstname} ${data.lastname}`);

            navigate(urls.auth)
        } catch (error) {
          console.error(error);
        }
      };

    return (
    <>
        <form className="px-4 py-3 registryForm" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text--heading2 title">Зарегистрироваться</h1>

            <div className="textInputContainer">
                <input type="text" className="form-control inputText" id="firstname"
                placeholder="Введите имя"
                {...register('firstname', { required: "Это поле не может быть пустым" })} />
                {<TextError text={errors.firstname?.message?.toString() || ''}/>}
            </div>

            <div className="textInputContainer">
                <input type="text" className="form-control inputText" id="lastname"
                placeholder="Введите фамилию"
                {...register('lastname', { required: "Это поле не может быть пустым" })} />
                {<TextError text={errors.lastname?.message?.toString() || ''}/>}
            </div>

            <div className="textInputContainer">
                <input type="email" className="form-control inputText" id="email"
                placeholder="Введите свой email"
                {...register('email', { required: "Это поле не может быть пустым" })} />
                {<TextError text={errors.email?.message?.toString() || ''}/>}
            </div>

            <div className="textInputContainer">
                <input type="password" className="form-control inputText" id="inputPassword" 
                placeholder="Введите пароль"
                {...register('password', { required: "Это поле не может быть пустым" })}/>
                {<TextError text={errors.password?.message?.toString() || ''}/>}
            </div>

            <div className="textInputContainer">
                <input type="password" className="form-control inputText" id="inputPasswordCheck" 
                placeholder="Повторите пароль"
                {...register('passwordCheck', { required: "Это поле не может быть пустым" })}/>
                {<TextError text={errors.passwordCheck?.message?.toString() || ''}/>}
            </div>
            
            <div className="registryContainer">
            <BaseButton text='Зарегистрироваться' theme='pink' className="registryButton"
                    type='submit'/>
            </div>

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
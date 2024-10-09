import { urls } from "../../navigation/app.urls"
import { useNavigate } from "react-router-dom"
import BaseButton from "../../shared/Buttons/BaseButton"
import './auth.css'

const Auth = () => {
    const navigate = useNavigate()

    const onSubmit = () => {
        navigate(urls.user)
    }

    return (
        <>
        <form className="px-4 py-3" onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="loginInput" className="form-label">Логин</label>
                <input type="text" className="form-control" id="loginInput" placeholder="user"/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Пароль</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
            </div>
            <div className="mb-3">
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="authFormCheck"/>
                <label className="form-check-label" htmlFor="authFormCheck">
                <div>Remember me. Though I had to say goodbye</div>
                <div>Remember me. Don't let it make you cry...</div>
                </label>
            </div>
            </div>
            <div className="buttonsContainer">
                <BaseButton text='Войти' theme='dark-blue-secondary' className="loginButton"
                    type='submit' onClick={() => navigate(urls.user)}/>
                <BaseButton text='Зарегистрироваться' className="registryButton"
                    theme='white' onClick={() => navigate(urls.registration)}/>
            </div>
        </form>
        </>
    )
}

export default Auth
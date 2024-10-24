import '../../styles/text.css'
import { useSelector } from 'react-redux';

const User = () => {
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

    if (!isLoggedIn) {
        return <div>Пожалуйста, войдите в систему</div>;
      }
    
    return (
        <div>
            <h1 className='text--heading1'>Личный кабинет</h1>
            <h2 className='text--heading3 text-300'> 
                {"Введите номер карты и 3 цифры с обратной стороны"}</h2>
            <form className="row g-3 needs-validation">
                <input className="form-control" type="text" 
                    placeholder="мамой клянусь, это не развод" aria-label="loginInput"/>
            </form>
               
        </div>
    )
}

export default User
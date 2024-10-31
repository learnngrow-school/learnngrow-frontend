import '../../styles/text.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const User = () => {
    const token = useSelector((state: any) => state.auth.token);

    useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Здесь будет логика для проверки аутентификации и загрузки данных
    }
  }, [token]);

    return (
        <div>
            <h1 className='text--heading1'>Личный кабинет</h1>
            <h2 className='text--heading3 text-300'> 
                {"Введите номер карты и 3 цифры с обратной стороны"}</h2>
                <div>
                    {token ? <p>You are logged in!</p> : <p>You are not logged in!</p>}
                </div>
               
        </div>
    )
}

export default User
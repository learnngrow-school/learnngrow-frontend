import { urls } from '../../../../navigation/app.urls'
import BaseButton from '../../../Buttons/BaseButton'
import { useNavigate } from 'react-router-dom'
import '../../../styles/text.css'
import '../NavUser/navUser.css'

const NavUser = () => {
    const navigate = useNavigate()
    
    return (
        <>
        
        <BaseButton text='Войти в аккаунт' onClick={ () => navigate(urls.auth)}
            className='userContainer text--body-m' theme='dark-blue-primary'/>
        </>
    )
}

export default NavUser
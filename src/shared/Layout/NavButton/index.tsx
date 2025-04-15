import { useNavigate } from 'react-router-dom'
import '../../../styles/text.css'
import './navbutton.css'
import '../layout.css'
import DropDownButton from '../../Buttons/DropDownButton'
import { urls } from '../../../navigation/app.urls'
import DarkLogo from '/src/assets/icons/darkLogo.svg'
import MenuDrop from '../../../assets/icons/menuDrop.svg'

const NavButton = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem('user')


  const lk = user !== null ? 'Личный кабинет' : 'Вход'

  const items = ['Главная', 'Новости', 'Контакты', lk]

  const handleNavigate = (item: string) => {
    switch(item) {
      case 'Главная':
        navigate(urls.main)
        break
      case 'Новости':
        navigate(urls.news)
        break
      case 'Контакты':
        navigate(urls.contacts)
        break
      case lk:
            if (user !== null) {
                navigate(urls.mainPersonal)
            } else {
                navigate(urls.auth)
            }
            break
      default:
        break
    }
  }

  return (
    <div className="navbutton">
        <div className="logoBlock" onClick={() => navigate(urls.main)}>
            <img src={DarkLogo} alt="logo lng" className='logoImg'/>
        </div>
        <div className='drop-down-button'>
          <DropDownButton 
              items={items} 
              text={''} 
              theme={'white-primary'}
              onItemClick={handleNavigate}
              iconPath={MenuDrop}
              withToggleIcon={false}
              className='btn-menu-drop'
          />
        </div>
    </div>
  )
}

export default NavButton

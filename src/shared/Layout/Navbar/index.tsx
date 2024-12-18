import '../layout.css'
import './navbar.css'
import NavigationLink from './NavigationLink'
import { appLinks } from '../../../navigation/app.links'
import { useNavigate } from 'react-router-dom'
import { urls } from '../../../navigation/app.urls'
import DarkLogo from '/src/assets/icons/darkLogo.svg'
import UserLogo from '/src/assets/icons/user.svg'
import DarkUserLogo from '/src/assets/icons/userDark.svg'
import '../../../styles/text.css'
import DropDownButton from '../../Buttons/DropDownButton'
import BaseButton from '../../Buttons/BaseButton'

const Navbar = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem('user')

  const onSubjectClick = (evt: any) => {
    localStorage.setItem('subject', evt.target.innerText)
    navigate(urls.courses)
  }

  return (
    <div className="navbar">
      <div className="logoBlock" onClick={() => navigate(urls.main)}>
        <img src={DarkLogo} alt="logo lng" className='logoImg'/>
      </div>
      <div className='navLinksBlock'>
        <DropDownButton text='Предметы' 
          items={[ 'История', 'Математика', 'Русский язык',
            'Информатика' ]} 
          theme='white-primary'
          className='subjectsContainer'
          onClick={onSubjectClick}/>
        {/*Курсы*/}
        <NavigationLink key={appLinks[2].name} link={appLinks[2]}   
          onClick={() => {

            //console.log(localStorage.getItem('subject'))
            navigate(urls.courses)
          }}/>
        {/*Контакты*/}
        <NavigationLink key={appLinks[3].name} link={appLinks[3]} 
          onClick={() => navigate(urls.contacts)}/>
        <BaseButton text={user !== null ? `Привет, ${JSON.parse(user).firstName}!` :'Вход в аккаунт'
          } 
            onClick={ () => {
              if (user !== null) {
                navigate(urls.mainPersonal);
              }
              else {
                navigate(urls.auth);
              }
            }}
            className='userContainer text--body-s' theme='dark-blue-primary' iconFirst={true}
            iconPath={UserLogo} iconPathHover={DarkUserLogo}/>
      </div>
    </div>
  )
}

export default Navbar

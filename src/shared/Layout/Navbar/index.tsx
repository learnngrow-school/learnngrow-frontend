import '../layout.css'
import NavigationLink from './NavigationLink'
import { appLinks } from '../../../navigation/app.links'
import { useNavigate } from 'react-router-dom'
import { urls } from '../../../navigation/app.urls'
import DarkLogo from '/src/assets/icons/darkLogo.svg'
import UserLogo from '/src/assets/icons/user.svg'
import '../../../styles/text.css'
import DropDownButton from '../../Buttons/DropDownButton'
import BaseButton from '../../Buttons/BaseButton'

const Navbar = () => {
  const navigate = useNavigate()

  const onSubjectClick = (evt: any) => {
    localStorage.setItem('subject', evt.target.innerText)
    navigate(urls.courses)
  }

  return (
    <div className="navbar">
      <div className="logoBlock" onClick={() => navigate(urls.main)}>
        <img src={DarkLogo} alt="logo " className='logoImg'/>
      </div>
      <div className='navLinksBlock'>
        <DropDownButton text='Предметы' 
          items={['Плетение фенечек', 'Зельеварение', 
            'Психология семейной жизни', 'Эльфийский язык', 
            'Блинчиковедение', 'Демонология']} 
          theme='white'
          className='subjectsContainer'
          onClick={onSubjectClick}/>
        {/*Курсы*/}
        <NavigationLink key={appLinks[2].name} link={appLinks[2]}   
          onClick={() => {
            localStorage.clear()
            console.log(localStorage.getItem('subject'))
            navigate(urls.courses)
          }}/>
        {/*Контакты*/}
        <NavigationLink key={appLinks[3].name} link={appLinks[3]} 
          onClick={() => navigate(urls.contacts)}/>
        <BaseButton text='Войти в аккаунт' onClick={ () => navigate(urls.auth)}
            className='userContainer' theme='dark-blue-primary' 
            iconPath={UserLogo}/>
      </div>
    </div>
  )
}

export default Navbar

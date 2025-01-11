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
import { Subject } from '../../../types/subject'
import { useEffect, useState } from 'react'
import { getSubjects } from '../../../services/subject.service'
import { AxiosError } from 'axios'

const Navbar = () => {

  const fishSubjects: Subject[] = [
      {
          id: 1,
          title: "Математика"
      },
      {
          id: 2,
          title: "Физика"
      },
      {
          id: 3,
          title: "Русский язык"
      },
      {
          id: 4,
          title: "Информатика"
      },
      {
          id: 5,
          title: "Литература"
      },
      {
          id: 6,
          title: "Английский язык"
      },
      {
          id: 7,
          title: "Обществознание"
      }
  ] 
  const navigate = useNavigate()
  const user = localStorage.getItem('user')
  const [subjects, setSubjects] = useState<Subject[]>(fishSubjects)

  useEffect(() => { 
    getSubjects().then((response) => {
    if (!(response instanceof AxiosError)) {
      setSubjects(response.data)
    }
  } )
  }, [])


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
          items={subjects.length > 0 ? subjects.map((s) => s.title) : fishSubjects.map((s) => s.title)} 
          theme='white-primary'
          className='subjectsContainer'
          onClick={onSubjectClick}/>
        {/*Новости*/}
        <NavigationLink key={appLinks[2].name} link={appLinks[2]}   
          onClick={() => {
            navigate(urls.news)
          }}/>
        {/*Контакты*/}
        <NavigationLink key={appLinks[3].name} link={appLinks[3]} 
          onClick={() => navigate(urls.contacts)}/>
        <BaseButton text={user !== null ? `Личный кабинет` :'Вход в аккаунт'
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

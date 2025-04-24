import { useNavigate } from 'react-router-dom'
import '../../../styles/text.css'
import './navbutton.css'
import '../layout.css'
import { urls } from '../../../navigation/app.urls'
import DarkLogo from '/src/assets/icons/darkLogo.svg'
import { useEffect, useState } from 'react'
import MenuDropSecond from '../../../assets/icons/menuDropSecond.svg'
import DropDownButton from '../../Buttons/DropDownButton'
import NavigationLink from '../Navbar/NavigationLink'
import BaseButton from '../../Buttons/BaseButton'
import DarkUserLogo from '/src/assets/icons/userDark.svg'
import { getSubjects } from '../../../services/subject.service'
import { AxiosError } from 'axios'
import { Subject } from '../../../types/subject'
import { appLinks } from '../../../navigation/app.links'
import UserLogo from '/src/assets/icons/user.svg'

const NavButton = () => {

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
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
      setExpanded(!expanded);
  };
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
    <div className='nav-wrappers'>
      <div className={`navbutton ${expanded ? 'expanded' : ''}`} >
        <div className='head-info'>
            <div className="logoBlock" onClick={() => {navigate(urls.main), setExpanded(!expanded)}}>
                <img src={DarkLogo} alt="logo lng" className='logoImg'/>
            </div>
            <div className='drop-down-button'>
              <img src={MenuDropSecond} onClick={handleClick}></img>
            </div>
        </div>
        <div className='btns-menu'>
          <DropDownButton text='Предметы' 
              items={subjects.length > 0 ? subjects.map((s) => s.title) : fishSubjects.map((s) => s.title)} 
              theme='white-primary'
              className='subjectsContainer'
              onClick={onSubjectClick}/>
          {/*Новости*/}
          <NavigationLink key={appLinks[2].name} link={appLinks[2]}   
            onClick={() => {
              navigate(urls.news)
              setExpanded(!expanded);
            }}/>
          {/*Контакты*/}
          <NavigationLink key={appLinks[3].name} link={appLinks[3]} 
            onClick={() => {
              navigate(urls.contacts)
              setExpanded(!expanded);
              }}/>
          <BaseButton text={user !== null ? `Личный кабинет` :'Вход в аккаунт'
            } 
              onClick={ () => {
                if (user !== null) {
                  navigate(urls.mainPersonal);
                  setExpanded(!expanded);
                }
                else {
                  navigate(urls.auth);
                  setExpanded(!expanded);
                }
              }}
              className='userContainer text--body-s' theme='dark-blue-primary' iconFirst={true}
              iconPath={UserLogo} iconPathHover={DarkUserLogo}/>
        </div>
      </div>
    </div>
  )
}

export default NavButton

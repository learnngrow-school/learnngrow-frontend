import { PupilPages, TeacherPages, AdminPages } from "../../../../enums/userNav"
import { urls} from "../../../../navigation/app.urls"
import BaseButton from "../../../../shared/Buttons/BaseButton"
import { useNavigate } from "react-router-dom"
import "./menu.css"

interface IMenuProps {
    title: string;
    onClick: () => void
}

const Menu = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user') || '')

    const items: IMenuProps[] = user.firstName == "Admin"?
    [
        {title: AdminPages.MAIN, onClick: () => navigate(urls.mainPersonal)},
        {title: AdminPages.SCHEDULE, onClick: () => navigate(urls.schedule)},
        {title: AdminPages.HOMEWORK, onClick: () => navigate(urls.homework)},
        {title: AdminPages.COURSES, onClick: () => navigate(urls.myCourses)},
        {title: AdminPages.PUPILS, onClick: () => navigate(urls.pupils)},
        {title: AdminPages.TEACHERS, onClick: () => navigate(urls.teachers)},
        {title: AdminPages.MYDATA, onClick: () => navigate(urls.myData)},
        {title: AdminPages.REVIEWS, onClick: () => navigate(urls.reviews)},
    ] 
    :
    user.isTeacher ? 
    [
        {title: TeacherPages.MAIN, onClick: () => navigate(urls.mainPersonal)},
        {title: TeacherPages.SCHEDULE, onClick: () => navigate(urls.schedule)},
        {title: TeacherPages.HOMEWORK, onClick: () => navigate(urls.homework)},
        {title: TeacherPages.COURSES, onClick: () => navigate(urls.myCourses)},
        {title: TeacherPages.PUPILS, onClick: () => navigate(urls.pupils)},
        {title: TeacherPages.MYDATA, onClick: () => navigate(urls.myData)},
    ] 
    :
    [
        {title: PupilPages.MAIN, onClick: () => navigate(urls.mainPersonal)},
        {title: PupilPages.SCHEDULE, onClick: () => navigate(urls.schedule)},
        {title: PupilPages.HOMEWORK, onClick: () => navigate(urls.homework)},
        {title: PupilPages.COURSES, onClick: () => navigate(urls.myCourses)},
        {title: PupilPages.SHOP, onClick: () => navigate(urls.shop)},
        {title: PupilPages.NEWS, onClick: () => navigate(urls.news)},
        {title: PupilPages.MYDATA, onClick: () => navigate(urls.myData)},
    ] 

    return (
        <div className="menu-container">
            {items.map((item, index) => (
                <BaseButton theme="white-without-shadow" key={index} 
                    className="menu-button" onClick={item.onClick} text={item.title}/>
            ))}
        </div>
    )
}

export default Menu
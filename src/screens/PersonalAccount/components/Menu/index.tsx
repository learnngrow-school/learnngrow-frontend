import { PupilPages, TeacherPages, AdminPages } from "../../../../enums/userNav"
import { urls} from "../../../../navigation/app.urls"
import BaseButton from "../../../../shared/Buttons/BaseButton"
import { useNavigate } from "react-router-dom"
import "./menu.css"
import useWindowSize from "../../../Courses/components/WindowSize/useWindowSize"
import Main from '../../../../assets/icons/main-home.svg'
import Schedule from '../../../../assets/icons/schedule.svg'
import Task from '../../../../assets/icons/task.svg'
import Course from '../../../../assets/icons/course.svg'
import Teacher from '../../../../assets/icons/teacher.svg'
import Reviews from '../../../../assets/icons/reviews.svg'
import MyData from '../../../../assets/icons/mydata.svg'

interface IMenuProps {
    title: string;
    onClick: () => void
    iconPath?: string;
}

const Menu = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user') || '')
    const { width } = useWindowSize();

    const items: IMenuProps[] = user.firstName == "Admin"?
    [
        {title: AdminPages.MAIN, onClick: () => navigate(urls.mainPersonal), iconPath: Main},
        {title: AdminPages.SCHEDULE, onClick: () => navigate(urls.schedule), iconPath: Schedule},
        {title: AdminPages.HOMEWORK, onClick: () => navigate(urls.homework), iconPath: Task},
        {title: AdminPages.COURSES, onClick: () => navigate(urls.myCourses), iconPath: Course},
        // {title: AdminPages.PUPILS, onClick: () => navigate(urls.pupils)},
        {title: AdminPages.TEACHERS, onClick: () => navigate(urls.teachers), iconPath: Teacher},
        {title: AdminPages.REVIEWS, onClick: () => navigate(urls.reviews), iconPath: Reviews},
        {title: AdminPages.MYDATA, onClick: () => navigate(urls.myData), iconPath: MyData},
    ] 
    :
    user.isTeacher ? 
    [
        {title: TeacherPages.MAIN, onClick: () => navigate(urls.mainPersonal), iconPath: Main},
        {title: TeacherPages.SCHEDULE, onClick: () => navigate(urls.schedule), iconPath: Schedule},
        {title: TeacherPages.HOMEWORK, onClick: () => navigate(urls.homework), iconPath: Task},
        {title: TeacherPages.COURSES, onClick: () => navigate(urls.myCourses), iconPath: Course},
        // {title: TeacherPages.PUPILS, onClick: () => navigate(urls.pupils)},
        {title: TeacherPages.MYDATA, onClick: () => navigate(urls.myData), iconPath: MyData},
    ] 
    :
    [
        {title: PupilPages.MAIN, onClick: () => navigate(urls.mainPersonal), iconPath: Main},
        {title: PupilPages.SCHEDULE, onClick: () => navigate(urls.schedule), iconPath: Schedule},
        {title: PupilPages.HOMEWORK, onClick: () => navigate(urls.homework), iconPath: Task},
        {title: PupilPages.COURSES, onClick: () => navigate(urls.myCourses), iconPath: Course},
        // {title: PupilPages.SHOP, onClick: () => navigate(urls.shop), iconPath: Main},
        {title: PupilPages.MYDATA, onClick: () => navigate(urls.myData), iconPath: MyData},
    ] 

    const showIconsOnly = width <= 768;

    return (
        <div className="menu-container">
            {items.map((item, index) => (
                <BaseButton theme="white-without-shadow" 
                    key={index} 
                    className="menu-button" 
                    onClick={item.onClick} 
                    text={showIconsOnly ? "" : item.title}
                    iconPath={showIconsOnly ? item.iconPath : undefined}
                />
            ))}
        </div>
    )
}

export default Menu
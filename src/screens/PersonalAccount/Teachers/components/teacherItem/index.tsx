import "./item.css";
import { Teacher } from "../../../../../types/teacher";

interface IProps {
    teacher: Teacher
    index: number
}

const TeacherItem = ({teacher, index}: IProps) => {
    return (
        <div className="teacher-item-container">
            <hr/>
            <div key={teacher.userData.slug?.toString()} className="teacher-name text--body-s text-400 text--blue">
                {index + ". " + teacher.userData.lastName + " " + teacher.userData.firstName + " " + teacher.userData.middleName}
            </div>
        </div>
    )
}

export default TeacherItem
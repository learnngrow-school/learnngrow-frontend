import BaseButton from "../../../shared/Buttons/BaseButton"
import { useNavigate } from "react-router-dom";
import { urls } from "../../../navigation/app.urls";
import { getTeachers } from "../../../services/teacher.service";
import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Teacher } from "../../../types/teacher";
import Plus from "../../../assets/icons/plus.svg"
import './teachers.css';
import TeacherItem from "./components/teacherItem";

const Teachers = () => {
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        getTeachers().then((response : any) => {
            if (! (response instanceof AxiosError) && response.status === 200) {
                setTeachers(response.data);
            }
        });
    }, [])

    const onTeacherAddClick = () => {
        navigate(urls.teacherCreation);
    }
    return (
    <div>
        <div className="title-teachers-container">
            <div className="text--heading2 text-600 text--blue">Преподаватели</div>
        </div>
        
        <BaseButton theme="pink-primary" onClick={onTeacherAddClick} text="Добавить преподавателя" className="btn-add-teacher" iconPath={Plus}/>
        <div className="teachers-block">
            {teachers && <div className="text--heading3 text-600 text--blue fio">ФИО</div>}
            {teachers.length > 0 ? teachers.map((t :Teacher, index) => (
                <TeacherItem teacher={t} index={index + 1} key={t.userData.slug?.toString()}/>
            ))
            :
            <div>Данных пока нет</div>
            }
        </div>
    </div>
    )
};

export default Teachers
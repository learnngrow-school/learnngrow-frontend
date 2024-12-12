import BaseButton from "../../../shared/Buttons/BaseButton"
import { useNavigate } from "react-router-dom";
import { urls } from "../../../navigation/app.urls";
import { getTeachers } from "../../../services/teacher.service";
import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Teacher } from "../../../types/teacher";

const Teachers = () => {
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        getTeachers().then((response : any) => {
            if (! (response instanceof AxiosError) && response.status === 200) {
                setTeachers(response.data);
                console.log(teachers);
            }
        });
    }, [])

    const onTeacherAddClick = () => {
        navigate(urls.teacherCreation);
    }
    return (
    <div>
        <div className="text--heading2 text-600">Преподаватели</div>
        <BaseButton theme="white-primary" onClick={onTeacherAddClick} text="Добавить преподавателя"/>
        <div className="">
            {teachers && teachers.map((t :Teacher) => (
                <div key={t.userData.slug?.toString()}>
                    {t.userData.lastName + " " + t.userData.firstName + " " + t.userData.middleName}
                </div>
                
            ))
            }
        </div>
    </div>
    )
};

export default Teachers
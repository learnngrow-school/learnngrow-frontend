import "./teachers.css";
// import { ITeacherCardProps } from "./teacher-card";
import Sonya from "../../../../assets/pictures/sonya.png"
// import Grom from "../../../../assets/pictures/grom.png"
// import Doctor from "../../../../assets/pictures/doctor.png"
// import Jack from "../../../../assets/pictures/jack.png"
import PointsSlider from "../PointsSlider";
import { Teacher } from "../../../../types/teacher";

// const teachers : ITeacherCardProps[]= [
//     {
//         id: "0",
//         name: "Софья Павловна Кияткина",
//         iconPath: Sonya,
//         subjects: ["Математика", "Русский язык"]
//     },
//     {
//         id: "1",
//         name: "Капитан Джек Воробей",
//         subjects: ["Мореплавание"],
//         iconPath: Jack
//     },
//     {
//         id: "2",
//         name: "Королева Учебного Центра",
//         iconPath: Sonya,
//         subjects: ["Информатика", "Управление центром"]
//     },
//     {
//         id: "3",
//         name: "Игорь Константинович Гром",
//         iconPath: Grom,
//         subjects: ["Физкультура", "Обществознание"]
//     },
//     {
//         id: "4",
//         name: "Доктор Who",
//         iconPath: Doctor,
//         subjects: ["Биология", "Тардисмейкинг"]
//     },
//     {
//         id: "5",
//         name: "Женщина Моей Мечты",
//         iconPath: Sonya,
//         subjects: ["Основы грации", "Искусство обольщения"]
//     },
//     {
//         id: "6",
//         name: "Мент",
//         iconPath: Grom,
//         subjects: ["Бег с препятствиями", "Правоведение"]
//     },
//     {
//         id: "7",
//         name: "Джонни Депп",
//         subjects: ["Пиратопритворство"],
//         iconPath: Jack
//     },
//     {
//         id: "8",
//         name: "Доктор Пепси",
//         iconPath: Doctor,
//         subjects: ["Исцеление медицинским спиртом"]
//     },
// ]

interface IProps {
    data: Teacher[]
}

const Teachers = ({ data }: IProps) => {
    

    const teachers = data.map((teacher, index) => ({
        id: teacher.userData.id || index,
        name: teacher.userData.firstName + " " + teacher.userData.middleName + " " + teacher.userData.lastName ,
        iconPath: teacher.userData?.iconPath || Sonya,
        subjects: teacher.teacherData.subjectIds.map((subjectId) => subjectId.toString())
    }))

    return (
        <div className="content">
            <div className="text--heading2 text-600 title">Наши преподаватели</div>
            <PointsSlider 
                data={teachers} 
                dataType="teachers"
                dataClassName="teachers-cards"
                oddBlockLength={teachers.length < 5? 3 : 5}
                evenBlockLength={teachers.length < 4? 2 : 4}
            />
        </div>
    );
};

export default Teachers;
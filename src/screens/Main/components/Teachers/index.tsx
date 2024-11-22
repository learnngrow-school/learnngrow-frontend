import "./teachers.css";
// import TeacherCard from "./teacher-card";
import { ITeacherCardProps } from "./teacher-card";
import Sonya from "../../../../assets/pictures/sonya.png"
import Grom from "../../../../assets/pictures/grom.png"
import Doctor from "../../../../assets/pictures/doctor.png"
import Jack from "../../../../assets/pictures/jack.png"
// import { useState } from "react";
// import ProgressPoint from "../../../../shared/Buttons/Slider/ProgressPoint";
import PointsSlider from "../PointsSlider";

const teachers : ITeacherCardProps[]= [
    {
        id: "0",
        name: "Софья Павловна Кияткина",
        iconPath: Sonya,
        subjects: ["Математика", "Русский язык"]
    },
    {
        id: "1",
        name: "Капитан Джек Воробей",
        subjects: ["Мореплавание"],
        iconPath: Jack
    },
    {
        id: "2",
        name: "Королева Учебного Центра",
        iconPath: Sonya,
        subjects: ["Информатика", "Управление центром"]
    },
    {
        id: "3",
        name: "Игорь Константинович Гром",
        iconPath: Grom,
        subjects: ["Физкультура", "Обществознание"]
    },
    {
        id: "4",
        name: "Доктор Who",
        iconPath: Doctor,
        subjects: ["Биология", "Тардисмейкинг"]
    },
    {
        id: "5",
        name: "Женщина Моей Мечты",
        iconPath: Sonya,
        subjects: ["Основы грации", "Искусство обольщения"]
    },
    {
        id: "6",
        name: "Мент",
        iconPath: Grom,
        subjects: ["Бег с препятствиями", "Правоведение"]
    },
    {
        id: "7",
        name: "Джонни Депп",
        subjects: ["Пиратопритворство"],
        iconPath: Jack
    },
    {
        id: "8",
        name: "Доктор Пепси",
        iconPath: Doctor,
        subjects: ["Исцеление медицинским спиртом"]
    },
]

const Teachers = () => {

    return (
        <div className="content">
            <div className="text--heading2 text-600 title">Наши преподаватели</div>
            <PointsSlider 
                data={teachers} 
                dataType="teachers"
                dataClassName="teachers-cards"
                oddBlockLength={5}
                evenBlockLength={4}
            />
        </div>
    );
};

export default Teachers;
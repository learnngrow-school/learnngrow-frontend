import "./teachers.css";
import TeacherCard from "./teacher-card";
import { ITeacherCardProps } from "./teacher-card";
import Sonya from "../../../../assets/pictures/sonya.png"
import Grom from "../../../../assets/pictures/grom.png"
import Doctor from "../../../../assets/pictures/doctor.png"
import Slider from "../../../../assets/icons/big-arrow-right.svg"
// import DarkSlider from "../../../../assets/icons/big-arrow-right-blue.svg"
// import { useState } from "react";

const teachers : ITeacherCardProps[]= [
    {
        id: "1",
        name: "Софья Павловна Кияткина",
        iconPath: Sonya,
        subjects: ["Математика", "Русский язык"]
    },
    {
        id: "2",
        name: "Софья Павловна Кияткина",
        iconPath: Sonya,
        subjects: ["Математика", "Русский язык"]
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
        subjects: ["Биология"]
    },
    {
        id: "5",
        name: "Софья Павловна Кияткина",
        iconPath: Sonya,
        subjects: ["Математика", "Русский язык"]
    }
]

const Teachers = () => {
    
    const onRightSliderClick = () => {
    }

    const onLeftSliderClick = () => {}

    return (
        <div className="content">
            <div className="text--heading2 text-600 title">Наши преподаватели</div>
            <div className="teachers-cards">
                <img className="left-slider" src={Slider} alt="slider" onClick={onLeftSliderClick}/>
                {teachers.map((teacher) => (
                    <TeacherCard
                        key={teacher.id}
                        name={teacher.name}
                        iconPath={teacher.iconPath}
                        subjects={teacher.subjects}
                    />
                ))}
                <img className="right-slider" src={Slider} alt="slider" onClick={onRightSliderClick}/>
            </div>
        </div>
    );
};

export default Teachers;
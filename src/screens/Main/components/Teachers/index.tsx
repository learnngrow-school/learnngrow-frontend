import "./teachers.css";
import TeacherCard from "./teacher-card";
import { ITeacherCardProps } from "./teacher-card";
import Sonya from "../../../../assets/pictures/sonya.png"
import Grom from "../../../../assets/pictures/grom.png"
import Doctor from "../../../../assets/pictures/doctor.png"
import Jack from "../../../../assets/pictures/jack.png"
import { useState } from "react";
import ProgressPoint from "../../../../shared/Buttons/Slider/ProgressPoint";
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
    {
        id: "8",
        name: "Доктор Пепси",
        iconPath: Doctor,
        subjects: ["Исцеление медицинским спиртом"]
    },
]

const BLOCK_LENGTH = teachers.length % 2 == 0 ? 4 : 5;
const STEP = Math.floor(BLOCK_LENGTH / 2);

const Teachers = () => {
    
    const initialStart = Math.floor(teachers.length / 2) - STEP;
    console.log(initialStart)
    const [start, setStart] = useState(initialStart);
    const [end, setEnd] = useState(initialStart + BLOCK_LENGTH);
    const initialList = teachers.slice(start, end);
    console.log(end)
    const [smallList, setSmallList] = useState(initialList);
    
    const onRightSliderClick = () => {
        if ( end < teachers.length) 
        {
            setStart(currentStart => currentStart + 1);
            setEnd((end) => end + 1);
            const slice = smallList.slice();
            slice.push(teachers[end]);
            slice.shift();
            setSmallList(slice);
        }
    }

    const onLeftSliderClick = () => {
        if (start > 0) 
        {
            const slice = smallList.slice(0, BLOCK_LENGTH - 1);
            slice.unshift(teachers[start - 1]);
            setSmallList(slice);

            setStart(currentStart => currentStart - 1);
            setEnd(currentEnd => currentEnd - 1);
        }
    }

    return (
        <div className="content">
            <div className="text--heading2 text-600 title">Наши преподаватели</div>
            <div className="teachers-cards">
                {smallList.map((teacher) => (
                    <TeacherCard
                        id={teacher.id}
                        key={teacher.id}
                        name={teacher.name}
                        iconPath={teacher.iconPath}
                        subjects={teacher.subjects}
                    />
                ))}
            </div>
            {teachers.length > BLOCK_LENGTH && (
                <PointsSlider 
                    onRightClick={onRightSliderClick} 
                    onLeftClick={onLeftSliderClick}
                    children={
                        teachers.map((teacher) => 
                            (<ProgressPoint key={teacher.id} 
                                isActive={Number(teacher.id) >= start && Number(teacher.id) < end}/>))
                    }/>
                )
            }
        </div>
    );
};

export default Teachers;
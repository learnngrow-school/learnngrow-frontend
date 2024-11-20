import "./teachers.css";
import TeacherCard from "./teacher-card";
import { ITeacherCardProps } from "./teacher-card";
import Sonya from "../../../../assets/pictures/sonya.png"
import Grom from "../../../../assets/pictures/grom.png"
import Doctor from "../../../../assets/pictures/doctor.png"
import Jack from "../../../../assets/pictures/jack.png"
import Slider from "../../../../assets/icons/big-arrow-right.svg"
import { useState } from "react";
// import DarkSlider from "../../../../assets/icons/big-arrow-right-blue.svg"
// import { useState } from "react";

const BLOCK_LENGTH = 5;

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
    },
    {
        id: "6",
        name: "Игорь Константинович Гром",
        iconPath: Grom,
        subjects: ["Физкультура", "Обществознание"]
    },
]

const Teachers = () => {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(BLOCK_LENGTH);
    const [smallList, setSmallList] = useState(teachers.slice(start, end));
    
    const onRightSliderClick = () => {
        if ( end <= teachers.length) 
        {
            setStart(start + 1);
            setEnd(end + 1);
            console.log(`start: ${start}, end: ${end}`)
            setSmallList(teachers.slice(start, end));
            console.log(smallList[0].name)
        }
    }

    const onLeftSliderClick = () => {
        if (start > 0) 
        {
            setStart(start - 1);
            setEnd(end - 1);
            setSmallList(teachers.slice(start, end));
            console.log(smallList[0].name)
        }
    }

    return (
        <div className="content">
            <div className="text--heading2 text-600 title">Наши преподаватели</div>
            <div className="teachers-cards">
                {teachers.length > BLOCK_LENGTH && start > 0  && 
                    <img className="left-slider" src={Slider} alt="slider" onClick={onLeftSliderClick}/>}
                {smallList.map((teacher) => (
                    <TeacherCard
                        id={teacher.id}
                        key={teacher.id}
                        name={teacher.name}
                        iconPath={teacher.iconPath}
                        subjects={teacher.subjects}
                    />
                ))}
                {teachers.length > BLOCK_LENGTH && end < teachers.length && 
                    <img className="right-slider" src={Slider} alt="slider" onClick={onRightSliderClick}/>}
            </div>
        </div>
    );
};

export default Teachers;
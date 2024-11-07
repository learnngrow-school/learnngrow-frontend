import "./teachers.css";
import TeacherCard from "./teacher-card";
import { ITeacherCardProps } from "./teacher-card";
import Sonya from "../../../../assets/pictures/sonya.png"
import Grom from "../../../../assets/pictures/grom.png"
import Doctor from "../../../../assets/pictures/doctor.png"

const Teachers = () => {
    const teachers : ITeacherCardProps[]= [
        {
            name: "Софья Павловна Кияткина",
            iconPath: Sonya,
            subjects: ["Математика", "Русский язык"]
        },
        {
            name: "Софья Павловна Кияткина",
            iconPath: Sonya,
            subjects: ["Математика", "Русский язык"]
        },
        {
            name: "Игорь Константинович Гром",
            iconPath: Grom,
            subjects: ["Физкультура", "Обществознание"]
        },
        {
            name: "Доктор Who",
            iconPath: Doctor,
            subjects: ["Биология"]
        },
    ]
    return (
        <div className="content">
            <div className="text--heading2 text-600 title">Наши преподаватели</div>
            <div className="teachers-cards">
                {teachers.map((teacher) => (
                    <TeacherCard
                        name={teacher.name}
                        iconPath={teacher.iconPath}
                        subjects={teacher.subjects}
                    />
                ))}
            </div>
        </div>
    );
};

export default Teachers;
import "./teachers.css";
import TeacherCard from "./teacher-card";
import { ITeacherCardProps } from "./teacher-card";
import Sonya from "../../../../assets/pictures/sonya.png"
import Grom from "../../../../assets/pictures/grom.png"
import Doctor from "../../../../assets/pictures/doctor.png"

const Teachers = () => {
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
    ]
    return (
        <div className="content">
            <div className="text--heading2 text-600 title">Наши преподаватели</div>
            <div className="teachers-cards">
                {teachers.map((teacher) => (
                    <TeacherCard
                        key={teacher.id}
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
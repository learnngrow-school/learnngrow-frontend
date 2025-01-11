import BaseButton from "../../../shared/Buttons/BaseButton";
import { Subject } from "../../../types/subject";
import "../main.css";

interface IProps {
    data: Subject[]
}

export const fishSubjects: Subject[] = [
    {
        id: 1,
        title: "Математика"
    },
    {
        id: 2,
        title: "Физика"
    },
    {
        id: 3,
        title: "Русский язык"
    },
    {
        id: 4,
        title: "Информатика"
    },
    {
        id: 5,
        title: "Литература"
    },
    {
        id: 6,
        title: "Английский язык"
    },
    {
        id: 7,
        title: "Обществознание"
    }
]

const Subjects = ({data} : IProps) => {

    

    const onTestClick = () => {
        window.open("https://t.me/LearnnGrowBot");
    }

    const subjects = data.length > 0 ? data : fishSubjects

    return (
        <div className="subjects-container">
            <div className="text--heading2 text-600 title-2">Предметы</div>
            <div className="subjects-cards">
                {subjects.map((subject, index) => (
                    <div className="subject-card text--body-s text-400" key={index}>{subject.title}</div>
                ))
                }
            </div>
            <div className="about-test text--body-s text-400 ">
                Пройди тестирование по выбранному предмету и узнай свой уровень
                <br />
                После тестирования можешь записаться на бесплатное пробное занятие
            </div>
            <BaseButton text="Пройти тестирование" theme="pink-secondary" onClick={onTestClick}/>
        </div>
    );
};

export default Subjects
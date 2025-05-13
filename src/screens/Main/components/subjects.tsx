import BaseButton from "../../../shared/Buttons/BaseButton";
import { Subject } from "../../../types/subject";
import "../main.css";

interface IProps {
    data: Subject[]
}

const Subjects = ({data} : IProps) => {
    const fishSubjects: Subject[] = [
        {
            id: 1,
            title: "default_subject"
        },
    ]
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
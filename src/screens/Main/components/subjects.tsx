import BaseButton from "../../../shared/Buttons/BaseButton";
import ArrowRight from "../../../assets/icons/arrowRight.svg";
import "../main.css";
import { useState } from "react";

const Subjects = () => {
    const MAX_SUBJECTS = 5;

    const initialSubjects = ["Математика", "Физика", "Русский язык", "Информатика",
        "Литература", "Английский язык", "Разработка игр", "Химия"
    ]
    const firstSubjects = initialSubjects.slice(0, MAX_SUBJECTS);
    const [subjects, setSubjects] = useState(firstSubjects);
    const [showSubjectsText, setShowSubjectsText] = useState("Все предметы");
    const [subjectsHidden, setSubjectsHidden] = useState(false);
    const [subjectsIconFirst, setSubjectsIconFirst] = useState(false);
    const [iconClassName, setIconClassName] = useState("");

    const onAllSubjectsClick = () => {
        setSubjectsHidden(!subjectsHidden);
        if (subjectsHidden) {
            setShowSubjectsText("Все предметы");
            setSubjects(firstSubjects);
            setSubjectsIconFirst(false);
            setIconClassName("");
        } else {
            setSubjects(initialSubjects)
            setShowSubjectsText("Скрыть все предметы");
            setSubjectsIconFirst(true);
            setIconClassName("rotate-180");
        }
    }

    return (
        <div className="subjects-container">
            <div className="text--heading2 text-600 title-2">Предметы</div>
            <div className="subjects-cards">
                {subjects.map((subject) => (
                    <div className="subject-card text--body-s text-400" key={subject}>{subject}</div>
                ))}
                { initialSubjects.length > MAX_SUBJECTS ?
                <BaseButton text={showSubjectsText} theme="dark-blue-secondary" 
                    iconFirst={subjectsIconFirst} iconClassName={iconClassName}
                    iconPath={ArrowRight} iconPathHover={ArrowRight} onClick={onAllSubjectsClick}/>
                : <></>}
            </div>
            <div className="about-test text--body-s text-400 ">
                Пройди тестирование по выбранному предмету и узнай свой уровень
                <br />
                После тестирования можешь записаться на бесплатное пробное занятие
            </div>
            <BaseButton text="Пройти тестирование" theme="pink"/>
        </div>
    );
};

export default Subjects
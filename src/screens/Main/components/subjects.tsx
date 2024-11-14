import BaseButton from "../../../shared/Buttons/BaseButton";
import "../main.css";

const Subjects = () => {

    const subjects = ["Математика", "Физика", "Русский язык", "Информатика",
        "Литература", "Английский язык", "Разработка игр", "Химия"
    ]

    const onTestClick = () => {
        window.open("https://t.me/LearnnGrowBot");
    }

    return (
        <div className="subjects-container">
            <div className="text--heading2 text-600 title-2">Предметы</div>
            <div className="subjects-cards">
                {subjects.map((subject) => (
                    <div className="subject-card text--body-s text-400" key={subject}>{subject}</div>
                ))}
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
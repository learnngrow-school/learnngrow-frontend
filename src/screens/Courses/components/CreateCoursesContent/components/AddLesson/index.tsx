import './main.css';
import CardTypeLesson from "../CardTypeLesson";
import TextLessonType from "../../../../../../assets/icons/textLessonType.svg";
import VideoLessonType from "../../../../../../assets/icons/videoLessonType.svg";
import TestLessonType from "../../../../../../assets/icons/testLessonType.svg";
import TaskLessonType from "../../../../../../assets/icons/taskLessonType.svg";
import Close from "../../../../../../assets/icons/close.svg";

interface IProps {
    onClose: () => void;
    onSelectTypeTask: (typeTask: string) => void;
    onSelectTypeTaskBool: (typeBool: boolean) => void;
}

const AddLesson = ({ onClose, onSelectTypeTask, onSelectTypeTaskBool}: IProps) => {

    const handleSelectSecond = (typeBool: boolean) => {
        onSelectTypeTaskBool(typeBool); // Передаем тип урока в AddBlock
    };

    const handleSelect = (typeTask: string) => {
        onSelectTypeTask(typeTask); // Передаем тип урока в AddBlock
        onClose();
    };

    return (
        <form className="container-create-form-add-lesson">
            <div className="close" onClick={onClose}>
                <img className="icon" src={Close} alt="Закрыть"/>
            </div>

            <div className="header">Выберите тип урока</div>
            <div className="discript">Выберите тип материала, чтобы продолжить</div>

            <div className="classwork">
                Классная работа
                <div className="cards-create-form-add-lesson">
                    <CardTypeLesson iconPath={TextLessonType} title="Текст урока" onClick={() => {handleSelect("классной работы (Лекция)"); handleSelectSecond(false)}} />
                    <CardTypeLesson iconPath={VideoLessonType} title="Видео урок" onClick={() => {handleSelect("классной работы (Видео-лекция)"); handleSelectSecond(false)}} />
                </div>
            </div>

            <div className="homework">
                Домашнее задание
                <div className="cards-create-form-add-lesson">
                    <CardTypeLesson iconPath={TestLessonType} title="Тест" onClick={() => {handleSelect("теста"); handleSelectSecond(true)}} />
                    <CardTypeLesson iconPath={TaskLessonType} title="Задание" onClick={() => {handleSelect("задания"); handleSelectSecond(false)}} />
                </div>
            </div>
        </form>
    );
};

export default AddLesson;

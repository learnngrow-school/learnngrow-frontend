import './main.css';
import CardTypeLesson from "../CardTypeLesson";
import TextLessonType from "../../../../../../assets/icons/textLessonType.svg";
import VideoLessonType from "../../../../../../assets/icons/videoLessonType.svg";
import TestLessonType from "../../../../../../assets/icons/testLessonType.svg";
import TaskLessonType from "../../../../../../assets/icons/taskLessonType.svg";
import Close from "../../../../../../assets/icons/close.svg";

interface IProps {
    onClose: () => void;
    onSelectLessonType: (lessonType: string) => void;
}

const AddLesson = ({ onClose, onSelectLessonType }: IProps) => {

    const handleSelect = (lessonType: string) => {
        onSelectLessonType(lessonType); // Передаем тип урока в AddBlock
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
                    <CardTypeLesson iconPath={TextLessonType} title="Текст урока" onClick={() => handleSelect("классной работы")} />
                    <CardTypeLesson iconPath={VideoLessonType} title="Видео урок" onClick={() => handleSelect("классной работы")} />
                </div>
            </div>

            <div className="homework">
                Домашнее задание
                <div className="cards-create-form-add-lesson">
                    <CardTypeLesson iconPath={TestLessonType} title="Тест" onClick={() => handleSelect("теста")} />
                    <CardTypeLesson iconPath={TaskLessonType} title="Задание" onClick={() => handleSelect("задания")} />
                </div>
            </div>
        </form>
    );
};

export default AddLesson;

import { useState } from "react";
import BaseButton from "../../../../../../shared/Buttons/BaseButton";
import TextInput from '../../../../../../shared/Inputs/TextInput';
import "./main.css";
import AddLesson from "../AddLesson";
import FormModalLesson from "../../../../../../shared/Modals/FormModalLesson";
import AddLessonName from "../AddLessonName";

interface IProps {
    onLessonSubmit: (lesson: string, content: string, type: string) => void;
}

const AddBlock = ({ onLessonSubmit }: IProps) => {
    const [isAddLessonOpen, setIsAddLessonOpen] = useState(false);
    const [isAddLessonNameOpen, setIsAddLessonNameOpen] = useState(false);
    const [lessonTitle, setLessonTitle] = useState<string>(""); // Название урока
    // const [selectedContentName, setSelectedContentName] = useState<string | null>(null); // Название теста/задания
    const [lessonType, setLessonType] = useState<string | null>(null);

    const showAddLesson = () => {
        setIsAddLessonOpen(true);
    };

    const hideAddLesson = () => {
        setIsAddLessonOpen(false);
    };

    const showAddLessonName = (type: string) => {
        setLessonType(type); // Сохраняем выбранный тип
        setIsAddLessonOpen(false);
        setIsAddLessonNameOpen(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLessonTitle(e.target.value);
    };

    const handleLessonNameSubmit = (contentName: string) => {
        // setSelectedContentName(contentName);
        setIsAddLessonNameOpen(false);
        onLessonSubmit(lessonTitle, contentName, lessonType || ''); // Передаем оба названия
    };

    return (
        <div className="add-block-card">
            <div className="header">Введите заголовок урока</div>
            <div className="input">
                <TextInput 
                    placeholder="Урок 1"
                    type="text"
                    id="title"
                    register={{ onChange: handleInputChange }}
                />
            </div>
            <div className="btns">
                <BaseButton
                    text="Добавить урок"
                    theme="pink-secondary"
                    className="button-add-block"
                    onClick={showAddLesson}
                />
            </div>

            <FormModalLesson
                content={<AddLesson onClose={hideAddLesson} onSelectLessonType={showAddLessonName} />}
                isOpen={isAddLessonOpen}
                size="lg"
                centered
                dialogClassName="add-block-card-position-form"
            />

            <FormModalLesson
                content={<AddLessonName onClose={() => setIsAddLessonNameOpen(false)} onSubmit={handleLessonNameSubmit} lessonType={lessonType || ''} />}
                isOpen={isAddLessonNameOpen}
                size="lg"
                centered
                dialogClassName="add-block-card-position-form"
            />
        </div>
    );
};

export default AddBlock;

import { useState } from "react";
import BaseButton from "../../../../../../shared/Buttons/BaseButton";
import TextInput from '../../../../../../shared/Inputs/TextInput';
import "./main.css";
import AddLesson from "../AddLesson";
import FormModalLesson from "../../../../../../shared/Modals/FormModalLesson";
import AddLessonName from "../AddLessonName";

interface IProps {
    onLessonSubmit: (nameLesson: string, nameTask: string, typeTask: string, typeTaskBool: boolean) => void;
}

const AddBlock = ({ onLessonSubmit }: IProps) => {
    const [isAddLessonOpen, setIsAddLessonOpen] = useState(false);
    const [isAddLessonNameOpen, setIsAddLessonNameOpen] = useState(false);
    const [nameLesson, setLessonTitle] = useState<string>(""); // Название урока
    const [typeTask, setLessonType] = useState<string | null>(null);
    const [typeTaskBool, setLessonTypeBool] = useState<boolean | false>(false);

    const showAddLesson = () => {
        setIsAddLessonOpen(true);
    };

    const hideAddLesson = () => {
        setIsAddLessonOpen(false);
    };

    const addTypeBool = (typeTaskBool: boolean) => {
        setLessonTypeBool(typeTaskBool);
    };

    const showAddLessonName = (typeTask: string) => {
        setLessonType(typeTask); // Сохраняем выбранный тип
        setIsAddLessonOpen(false);
        setIsAddLessonNameOpen(true);
    };

    const handleLessonNameSubmit = (nameTask: string) => {
        setIsAddLessonNameOpen(false);
        onLessonSubmit(nameLesson, nameTask, typeTask || '', typeTaskBool); // Сохраняем выбраннное навзвание задания и Передаем все значения в CreateCoursesContent
    };

    return (
        <div className="add-block-card">
            <div className="header">Введите заголовок урока</div>
            <div className="input">
                <TextInput 
                    placeholder="Урок 1"
                    type="text"
                    id="title"
                    register={{ onChange: (e: any) => setLessonTitle(e.target.value) } }
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
                content={<AddLesson onClose={hideAddLesson} onSelectTypeTask={showAddLessonName} onSelectTypeTaskBool={addTypeBool} />}
                isOpen={isAddLessonOpen}
                size="lg"
                centered
                dialogClassName="add-block-card-position-form"
            />

            <FormModalLesson
                content={<AddLessonName onClose={() => setIsAddLessonNameOpen(false)} onSubmit={handleLessonNameSubmit} typeTask={typeTask || ''} />}
                isOpen={isAddLessonNameOpen}
                size="lg"
                centered
                dialogClassName="add-block-card-position-form"
            />
        </div>
    );
};

export default AddBlock;

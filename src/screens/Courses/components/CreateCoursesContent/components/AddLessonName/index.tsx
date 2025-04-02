import './main.css';
import Close from "../../../../../../assets/icons/close.svg";
import TextInput from '../../../../../../shared/Inputs/TextInput';
import BaseButton from '../../../../../../shared/Buttons/BaseButton';
import { useState } from 'react';

interface IProps {
    onClose: () => void;
    onSubmit: (name: string) => void;
    lessonType: string;
}

const AddLessonName = ({ onClose, onSubmit, lessonType}: IProps) => {
    const [contentName, setContentName] = useState("");

    const handleNext = () => {
        if (contentName) {
            onSubmit(contentName);
            onClose();
        }
    };

    return (
        <form className="container-create-form-add-lesson-name">
            <div className="close" onClick={onClose}>
                <img className="icon" src={Close} alt="Закрыть"/>
            </div>

            <div className="header">Введите название {lessonType}</div>

            <div className='input'>
                <TextInput 
                    placeholder="Тест 1" 
                    defaultValue={contentName}
                    type="text" 
                    id="lesson-name" 
                    register={{ onChange: (e: any) => setContentName(e.target.value) }}
                />
            </div>

            <div className='btns'>
                <BaseButton text='Далее' theme='pink-secondary' className='add-lesson-name-btn' onClick={handleNext}/>
            </div>
        </form>
    );
};

export default AddLessonName;

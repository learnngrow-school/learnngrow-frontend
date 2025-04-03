import './main.css';
import Close from "../../../../../../assets/icons/close.svg";
import TextInput from '../../../../../../shared/Inputs/TextInput';
import BaseButton from '../../../../../../shared/Buttons/BaseButton';
import { useState } from 'react';

interface IProps {
    onClose: () => void;
    onSubmit: (name: string) => void;
    typeTask: string;
}

const AddLessonName = ({ onClose, onSubmit, typeTask}: IProps) => {
    const [nameTask, setContentName] = useState("");

    const handleNext = () => {
        if (nameTask) {
            onSubmit(nameTask);
            onClose();
        }
    };

    return (
        <form className="container-create-form-add-lesson-name">
            <div className="close" onClick={onClose}>
                <img className="icon" src={Close} alt="Закрыть"/>
            </div>

            <div className="header">Введите название {typeTask}</div>

            <div className='input'>
                <TextInput 
                    placeholder="Тест 1" 
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

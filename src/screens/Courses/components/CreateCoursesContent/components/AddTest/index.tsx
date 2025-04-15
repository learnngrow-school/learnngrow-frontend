import { useState } from 'react';
import BaseButton from '../../../../../../shared/Buttons/BaseButton';
import TextInput from '../../../../../../shared/Inputs/TextInput';
import './main.css';
import Plus from "../../../../../../assets/icons/plus-pink.svg";
import PlusBlue from "../../../../../../assets/icons/plus-blue.svg";
import RadioGroupSecond from '../../../../../../shared/Buttons/RadioGroupSecond/radioGroupSecond';
import React from 'react';
import Math from '../../../../../../assets/icons/sigma.svg';
import Pencil from '../../../../../../assets/icons/pencil.svg';
import { MathKeyboard } from '../../../../../../shared/Inputs/MathKeyboard';

interface IProps {
    lessonName: string | null;
}

const AddTest = ({ lessonName }: IProps) => {
    const [isQuestionVisible, setIsQuestionVisible] = useState(false);
    const [selected, setSelected] = React.useState<string>('Отдельный выбор');
    
    // Состояния для отображения соответствующих компонентов
    const [isTextInputVisible, setIsTextInputVisible] = useState(true); // По умолчанию отображается TextInput
    const [isMathKeyboardVisible, setIsMathKeyboardVisible] = useState(false);

    const handleAddQuestion = () => {
        setIsQuestionVisible(true);
    };

    const handleTextButtonClick = () => {
        setIsTextInputVisible(true);
        setIsMathKeyboardVisible(false);
    };

    const handleMathButtonClick = () => {
        setIsTextInputVisible(false);
        setIsMathKeyboardVisible(true);
    };

    const typeQuestion = ['Отдельный выбор', 'Соответствия', 'Ключевые слова', 'Множественный выбор', 'Соответствие изображения', 'Заполнить отступы', 'True - False']

    return (
        <div className='container-lesson-add-test'>
            <div className='title'>
                <div className='text'>Тест:</div>
                <div className='input'>
                    <TextInput 
                        placeholder='Название теста'
                        defaultValue={lessonName || ''}
                        type='text' 
                        id={''}        
                    />
                </div>
                <div className='lesson-add-test-btn'>
                    <BaseButton 
                        text='Сохранить название теста'
                        theme={'pink-secondary'}   
                        className='lesson-add-test-btn-bb'   
                    />
                </div>
            </div>

            {isQuestionVisible && (
                <div className='content-new-question'>
                    <div className='type'>
                        <div className='header'>Тип вопроса</div>
                        <div className='radio-btn-types'>
                        <RadioGroupSecond
                            options={typeQuestion}
                            selected={selected}
                            onChange={(value) => setSelected(value)}
                            name="example-radio"
                        />
                        </div>
                    </div>

                    {selected && (
                    <div className='question'>
                        <div className='type-text-question-btn'>
                            <BaseButton 
                                type="button"
                                text=""
                                theme="white-secondary"
                                iconFirst={true}
                                iconPath={Pencil}
                                iconPathHover={Pencil}  
                                iconClassName='icon-btn-text' 
                                className='btn-text' 
                                onClick={handleTextButtonClick} // Обработчик для TextInput
                            />
                            <BaseButton 
                                type="button"
                                text=""
                                theme="white-secondary"
                                iconFirst={true}
                                iconPath={Math}
                                iconPathHover={Math}   
                                iconClassName='icon-btn-math'
                                className='btn-math' 
                                onClick={handleMathButtonClick} // Обработчик для MathKeyboard
                            />
                        </div>
                        <div className='type-text-question-field'>
                            {isTextInputVisible && (
                                <TextInput 
                                    placeholder={'Текст ...'} 
                                    type={''} 
                                    id={''}                        
                                />
                            )}
                            {isMathKeyboardVisible && (
                                <MathKeyboard />
                            )}
                        </div>
                    </div>
                    )}
                </div>
            )}
            {!isQuestionVisible && (
                <div className='button-new-question'>
                    <BaseButton 
                        type="button"
                        text="Добавить вопрос"
                        theme="white-secondary"
                        iconFirst={true}
                        iconPath={Plus}
                        iconPathHover={PlusBlue}   
                        className='lesson-add-test-btn-bb' 
                        onClick={handleAddQuestion}
                    />
                </div>
            )}
        </div>
    );
};

export default AddTest;

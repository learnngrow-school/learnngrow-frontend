import BaseButton from '../../../../../../shared/Buttons/BaseButton';
import TextInput from '../../../../../../shared/Inputs/TextInput';
import './main.css';
import Plus from "../../../../../../assets/icons/plus-pink.svg";
import PlusBlue from "../../../../../../assets/icons/plus-blue.svg";

interface IProps {
    lessonName: string | null;
}

const AddTest = ({ lessonName }: IProps) => {
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
            <div className='button-new-question'>
                <BaseButton 
                    type="submit"
                    text="Добавить вопрос"
                    theme="white-secondary"
                    iconFirst={true}
                    iconPath={Plus}
                    iconPathHover={PlusBlue}   
                    className='lesson-add-test-btn-bb' 
                />
            </div>
        </div>
    );
};

export default AddTest;

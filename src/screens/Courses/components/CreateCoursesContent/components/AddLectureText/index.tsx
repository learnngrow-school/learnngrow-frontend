import { useState } from 'react';
import BaseButton from '../../../../../../shared/Buttons/BaseButton';
import TextInput from '../../../../../../shared/Inputs/TextInput';
import './main.css';
import Plus from "../../../../../../assets/icons/plus-pink.svg";
import PlusBlue from "../../../../../../assets/icons/plus-blue.svg";
import { useForm } from 'react-hook-form';
import { Lecture } from '../../../../../../types/lecture';
import { createLectureContent } from '../../../../../../services/lecture.service';
import { AxiosResponse } from 'axios';

interface IProps {
    nameTask: string | null;
    handleSelectSlug: (slugLecture: number) => void;
    slug: string;
}

const AddLectureText = ({ nameTask, handleSelectSlug, slug }: IProps) => {
    const [isQuestionVisible, setIsQuestionVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Lecture>();

    const handleAddQuestion = () => {
        setIsQuestionVisible(true);
    };

    const createSubmit = async (data: Lecture) => {
        const description = "Это описание лекции, которое соответствует требованиям сервера."; // Заглушка
        data.description = description;
        try {
            const response = await createLectureContent(data, slug);
            console.log('Контент-лекции и слаг', data, slug);
            console.log('Контент-лекции-ответ', response);
            const slugLecture = (response as AxiosResponse).data.slug;
            console.log('Контент-лекции-ответ', (response as AxiosResponse).data.slug);
            handleSelectSlug(slugLecture);
        } catch (error) {
            console.error('Ошибка при создании задания', error);
        }
    }

    return (
        <div className='container-lesson-add-lecturetext'>
            <div className='title'>
                <div className='text'>Введите заголовок:</div>
                <div className='input'>
                <form onSubmit={handleSubmit(createSubmit)}>
                    <TextInput
                        placeholder="Название ..."
                        defaultValue={nameTask || ''}
                        type="text"
                        id="title"
                        register={register("title", { required: "Обязательное поле" })}
                        error={errors.title}
                    />
                </form>
                </div>
                <div className='lesson-add-lecturetext-btn'>
                    <BaseButton 
                        text='Сохранить название'
                        theme={'pink-secondary'}   
                        className='lesson-add-lecturetext-btn-bb'
                        onClick={handleSubmit(createSubmit)} 
                    />
                </div>
            </div>

            {isQuestionVisible && (
                <div className='content-new-question-lecturetext'>
                    <div className='type-text-question-field-lecturetext'>
                        <form onSubmit={handleSubmit(createSubmit)}>
                            <TextInput 
                                placeholder={'Текст ...'} 
                                type='text'
                                id='content'
                                register={register("content", { required: "Обязательное поле" })}
                                error={errors.content}              
                            />
                        </form>
                    </div>
                </div>
            )}
            {!isQuestionVisible && (
                <div className='button-new-question-lecturetext'>
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

export default AddLectureText;

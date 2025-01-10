import TextError from "../../../../shared/Errors/TextError"
import TextInput from "../../../../shared/Inputs/TextInput"
import { useForm } from "react-hook-form";
import Lesson from "../../../../types/lesson";
import BaseButton from "../../../../shared/Buttons/BaseButton";
import './lessonCreation.css'
import DateTimeInput from "../../../../shared/Inputs/DateTimeInput";
import { getTeachers } from "../../../../services/teacher.service";
import { useEffect, useState } from "react";
import { Teacher } from "../../../../types/teacher";
import ListSelect from "../../../../shared/Inputs/ListSelect";
import { AxiosError } from "axios";
import { createLesson } from "../../../../services/lesson.service";
import { ERROR_RUS } from "../../../../shared/Errors/errorTypes";

interface IProps {    
    // onSubmit: (lesson: Lesson) => void
    // onCancel?: () => void
    onClose: () => void
}

const LessonCreation = ({onClose} : IProps) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const { register, handleSubmit, formState: { errors }} = useForm<Lesson | any>();

    useEffect(() => {
       const data = getTeachers();
       data.then((res: any) => setTeachers(res.data));
    }, [])

    
    const onLessonCreateClick = async (lesson: Lesson) => {
        setLoading(true);
            
        //18000 - 5 часов, для устранения временного сдвига
        const seconds = Math.floor(new Date(lesson.timestamp).getTime() / 1000) + 18000;
        lesson.timestamp = seconds;
        console.log('Добавлен урок на ',new Date(lesson.timestamp));
            
        const response = await createLesson(lesson);
    
        if (!(response instanceof AxiosError)) {
            onClose();
        }
        else {
            const errorRus = ERROR_RUS[response.message as string]
            setError( errorRus? errorRus : 'Ошибка сети');
            }
    }


    return (
        <form className="px-4 py-3 creation-form" onSubmit={handleSubmit(onLessonCreateClick)}>
            <div className="text--heading3 text-600 text--blue title">Добавление урока</div>
            <DateTimeInput placeholder={"Выберите время урока"} 
                register={{...register('timestamp',{required: "Выберите время урока"}) }}/>
            <TextError text={errors.timestamp?.message?.toString() || ''}/>

            <TextInput placeholder={"Добавьте домашнее задание"} type="text" id={"homework"} 
                register={{...register('homework') }} error={errors.homework}/>
            
            <TextInput placeholder={"Выберите ученика"} type="text" id={"studentSlug"} 
                register={{...register('studentSlug')}}/>
            {/* <TextInput placeholder={"Выберите преподавателя"} type="text" id={"teacherSlug"}
                register={{...register('teacherSlug',{required: "Выберите преподавателя"}) }}
                error={errors.teacherSlug}/> */}

            {teachers.length > 0 && <ListSelect data={teachers} placeholder={"Выберите преподавателя"}  
                register={{...register('teacherSlug',{required: "Выберите преподавателя"}) }}
                error={errors.teacherSlug}/> }
            
            <TextInput placeholder={"Добавьте комментарий к заданию"} type="text" 
                id={"teacherNotes"} register={{...register('teacherNotes') }}
                error={errors.teacherNotes}/>

            {error && <TextError text={error}/>}

            <div className="row-block">
                <BaseButton text={'Отмена'} onClick={onClose} theme="white-primary"
                className="cancel-btn"/>
                <BaseButton type='submit' text={loading? 'Добавление...' : 'Добавить урок'} 
                    theme="pink-primary"/>
            </div>
        </form>
    )
}

export default LessonCreation
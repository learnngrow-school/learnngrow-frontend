import TextError from "../../../../shared/Errors/TextError"
import TextInput from "../../../../shared/Inputs/TextInput"
import { useForm } from "react-hook-form";
import Lesson from "../../../../types/lesson";
import BaseButton from "../../../../shared/Buttons/BaseButton";
import './form.css'

interface IProps {    
    onSubmit: (lesson: Lesson) => void
}

const LessonCreation = ({onSubmit} : IProps) => {
    //const navigate = useNavigate()
    //const [loading, setLoading] = useState(false);
    //const [error, setError] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors }} = useForm<Lesson | any>();


    return (
        <form className="px-4 py-3 registryForm" onSubmit={handleSubmit(onSubmit)}>
            <input type='datetime-local' placeholder={"Выберите время урока"} id={"timestamp"} 
                {...register('timestamp',{required: "Выберите время урока"}) }/>
            <TextError text={errors.timestamp?.message?.toString() || ''}/>

            <TextInput placeholder={"Добавьте домашнее задание"} type="text" id={"homework"} 
                register={{...register('homework') }}/>
            <TextError text={errors.homework?.message?.toString() || ''}/>

            <div className="teacher-student-block">
                <TextInput placeholder={"Выберите ученика"} type="text" id={"studentSlug"} 
                    register={{...register('studentSlug') }}/>
                <TextInput placeholder={"Выберите преподавателя"} type="text" id={"teacherSlug"}
                    register={{...register('teacherSlug',{required: "Выберите преподавателя"}) }}/>
            </div>
            <TextInput placeholder={"Добавьте комментарий к заданию"} type="text" 
                id={"teacherNotes"} register={{...register('teacherNotes') }}/>
            <TextError text={errors.teacherNotes?.message?.toString() || ''}/>

            <BaseButton type='submit' text={'Добавить урок'} 
                theme="pink-primary"/>
        </form>
    )
}

export default LessonCreation
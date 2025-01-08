import { Review } from "../../../../types/review"
import { useForm } from "react-hook-form";
import BaseButton from "../../../../shared/Buttons/BaseButton";
import TextInput from "../../../../shared/Inputs/TextInput";

interface IProps {    
    onSubmit: (review: Review) => void
    onCancel?: () => void
}

const ReviewCreation = ({onSubmit, onCancel} :IProps) => {
    const { register, handleSubmit, formState: { errors }} = useForm<Review | any>();

    return (
        <form className="px-4 py-3 creation-form" onSubmit={handleSubmit(onSubmit)}>
            
            <TextInput placeholder={"Добавьте домашнее задание"} type="text" id={"homework"} 
                register={{...register('homework') }} error={errors.homework}/>
            
            <TextInput placeholder={"Выберите ученика"} type="text" id={"studentSlug"} 
                register={{...register('studentSlug')}}/>
            {/* <TextInput placeholder={"Выберите преподавателя"} type="text" id={"teacherSlug"}
                register={{...register('teacherSlug',{required: "Выберите преподавателя"}) }}
                error={errors.teacherSlug}/> */}

            
            <div className="row-block">
                <BaseButton text={'Отмена'} onClick={onCancel} theme="white-primary"
                className="cancel-btn"/>
                <BaseButton type='submit' text={'Опубликовать'} 
                    theme="pink-primary"/>
            </div>
        </form>
    )
}

export default ReviewCreation
import { Review } from "../../../../types/review"
import { useForm } from "react-hook-form";
import BaseButton from "../../../../shared/Buttons/BaseButton";
import TextInput from "../../../../shared/Inputs/TextInput";
import "./reviewCreation.css"

interface IProps {    
    onSubmit: (review: Review) => void
    onCancel?: () => void
}

const ReviewCreation = ({onSubmit, onCancel} :IProps) => {
    const { register, handleSubmit, formState: { errors }} = useForm<Review | any>();

    return (
        <form className="px-4 py-3 creation-form" onSubmit={handleSubmit(onSubmit)}>
            
            <div className="text--heading3 text-600 text--blue title">Добавление отзыва</div>

            <div className="text--body-s text-600 text--blue review-input-label">Автор</div>
            <TextInput placeholder={"Добавьте автора"} type="text" id={"authorName"} 
                register={{...register('authorName') }} error={errors.authorName}/>
            
            <div className="text--body-s text-600 text--blue review-input-label">Текст отзыва</div>
            <TextInput placeholder={"Добавьте отзыв"} type="text" id={"details"} 
                register={{...register('details')}} error={errors.details}/>
            
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
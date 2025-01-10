import {Subject} from "../../../../../types/subject";
import TextInput from "../../../../../shared/Inputs/TextInput";
import { useForm } from "react-hook-form";
import BaseButton from "../../../../../shared/Buttons/BaseButton";
import { createSubject } from "../../../../../services/subject.service";
import { AxiosError } from "axios";
import { useState } from "react";
import './subjectCreation.css'

interface IProps {    
    onClose: () => void
    onSubjectAdd: (number: number) => void
}

const SubjectCreation = ({onClose, onSubjectAdd} : IProps) => {
    const { register, handleSubmit, formState: { errors }} = useForm<Subject | any>();
    const [loading, setLoading] = useState(false);

    const onSubjectSubmit = async (data: Subject) => {
        setLoading(true);
        const response = await createSubject(data);

        if(!(response instanceof AxiosError)) {
            onSubjectAdd(response.data.length);
            onClose();
            setLoading(false);
        }
    }

    return (
        <form className="px-4 py-3 creation-form" onSubmit={handleSubmit(onSubjectSubmit)}>
            
            <div className="text--heading3 text-600 text--blue subject-creation-title">Добавление предмета</div>

            <div className="text--body-s text-600 text--blue subject-creation-label">Название</div>
            <TextInput placeholder={"Добавьте название"} type="text" id={"title"} 
                register={{...register('title', {required: "Введите название предмета"})}} error={errors.title}/>
            
            
            <div className="row-block">
                <BaseButton text={'Отмена'} onClick={onClose} theme="white-primary"
                className="subject-cancel-btn"/>
                <BaseButton type='submit' text={loading? 'Добавление...' : 'Добавить'} 
                    theme="pink-primary"/>
            </div>
        </form>
    )
}

export default SubjectCreation
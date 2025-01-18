import "./item.css";
import { Teacher } from "../../../../../types/teacher";
import BaseButton from "../../../../../shared/Buttons/BaseButton";
import AcceptModal from "../../../../../shared/Modals/AcceptModal";
import { useState } from "react";

interface IProps {
    teacher: Teacher
    index: number
}

const TeacherItem = ({teacher, index}: IProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onDeleteClick = () => {
        setIsOpen(false);
    }

    const onAcceptModalOpen = () => {
        setIsOpen(true);
    }

    const onAcceptModalClose = () => {
        setIsOpen(false);
    }

    return (
        <>
        <div className="teacher-item-container">
            <hr/>
            <div className="teacher-item">
                <div className="teacher-name text--body-s text-400 text--blue">
                    {index + ". " + teacher.userData.lastName + " " + teacher.userData.firstName + " " + teacher.userData.middleName}
                </div>
                <BaseButton theme="dark-blue-primary" text="Удалить" onClick={onAcceptModalOpen} 
                className="teacher-delete-btn"/>
            </div>
        </div>
        <AcceptModal onCancel={onAcceptModalClose} onOk={onDeleteClick} isOpen={isOpen} 
            content="Вы действительно хотите удалить этого преподавателя?" okText="Удалить"/>
        </>
    )
}

export default TeacherItem
import FormModal from "../../../shared/Modals/FormModal";
import BaseButton from "../../../shared/Buttons/BaseButton"
import { useState } from "react";
import { AxiosError } from "axios";
import { createLesson } from "../../../services/lesson.service";
import { ERROR_RUS } from "../../../shared/Errors/errorTypes";
import Lesson from "../../../types/lesson";
import LessonCreation from "./LessonCreation";

const Schedule = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const user = JSON.parse(localStorage.getItem('user') as string);

    const onLessonCreateClick = async (lesson: Lesson) => {
        //setLoading(true);
        console.log(lesson.timestamp, typeof lesson.timestamp);

        const date = new Date(lesson.timestamp);
        lesson.timestamp = date.getTime();
        
        console.log(lesson.timestamp, typeof lesson.timestamp);
        const response = await createLesson(lesson);

        if (!(response instanceof AxiosError)) {
            hideModal();
        }
        else {
            const errorRus = ERROR_RUS[response.message as string]
            console.log(errorRus? errorRus : response.message);
            //setError( errorRus? errorRus : 'Ошибка сети');
        }
    }

    const showModal = () => {
        setModalVisible(true);
    }

    const hideModal = () => {
        setModalVisible(false);
    }

    return (
        <>
            <div>Расписание</div>
            {user.isTeacher  || user.isSuperuser ?  
            <>
                <BaseButton data-bs-toggle="modal" data-bs-target="#creationModal"
                    text="Добавить урок" onClick={showModal} theme="dark-blue-primary"/>
                <FormModal id="creationModal" 
                    content={
                    <LessonCreation onSubmit={onLessonCreateClick} onCancel={hideModal}/>
                    } 
                    isOpen={modalVisible} 
                />
            </>
            : null}
        </>
    )
}

export default Schedule
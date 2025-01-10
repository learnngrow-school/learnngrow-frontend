import FormModal from "../../../shared/Modals/FormModal";
import BaseButton from "../../../shared/Buttons/BaseButton"
import { useState } from "react";
import LessonCreation from "./LessonCreation";
import "./schedule.css"

const Schedule = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const user = JSON.parse(localStorage.getItem('user') as string);

    //const [loading, setLoading] = useState(false);

    // const onLessonCreateClick = async (lesson: Lesson) => {
    //     setLoading(true);
    //     console.log(lesson.timestamp, typeof lesson.timestamp);
        
    //     //18000 - 5 часов, для устранения временного сдвига
    //     const seconds = Math.floor(new Date(lesson.timestamp).getTime() / 1000) + 18000;
    //     lesson.timestamp = seconds;
    //     console.log('Добавлен урок на ',new Date(lesson.timestamp));
        
    //     const response = await createLesson(lesson);

    //     if (!(response instanceof AxiosError)) {
    //         hideModal();
    //     }
    //     else {
    //         const errorRus = ERROR_RUS[response.message as string]
    //         console.log(errorRus? errorRus : response.message);
    //     }
    // }

    const showModal = () => {
        setModalVisible(true);
    }

    const hideModal = () => {
        setModalVisible(false);
    }

    return (
        <>
            <div className="text--heading2 text-600 text--blue">Расписание</div>
            {user.isTeacher || user.isSuperuser ?  
            <>
                <BaseButton data-bs-toggle="modal" data-bs-target="#creationModal" className="add-lesson-btn"
                    text="Добавить урок" onClick={showModal} theme="dark-blue-primary"/>
                <FormModal id="creationModal" 
                    content={
                    <LessonCreation onClose={hideModal}/>
                    } 
                    isOpen={modalVisible} 
                />
            </>
            : null}
        </>
    )
}

export default Schedule
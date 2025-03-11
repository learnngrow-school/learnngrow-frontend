import { useState, useEffect } from "react";
import FormModal from "../../../../../shared/Modals/FormModal";
import BaseButton from "../../../../../shared/Buttons/BaseButton";
import LessonCreation from "../LessonCreation/index";
import "../../schedule.css";
import { getSubjects } from "../../../../../services/subject.service";
import SubjectsSlider from "../SubjectsSlider/SubjectsSlider";
import PlusWhite from "../../../../../assets/icons/plus-white.svg";

const SubjectBar = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [subjects, setSubjects] = useState<string[]>([]);

    useEffect(() => {
        getSubjects().then((res: any) => {
            if (res.status === 200) {
                setSubjects(res.data.map((subject: any) => subject.title));
            }
        });
    }, []);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="container-schedule-buttons">
        <div className="filter-roll-subject-container">
            <SubjectsSlider subjects={subjects} />
        </div>

        <div className="add-lesson-container">
            <BaseButton
                data-bs-toggle="modal"
                data-bs-target="#creationModal"
                className="add-lesson-btn-schedule"
                text="Добавить занятие"
                onClick={showModal}
                theme="pink-primary"
                iconPath={PlusWhite}
            />
            <FormModal
                id="creationModal"
                content={<LessonCreation onClose={hideModal} />}
                isOpen={modalVisible}
            />
        </div>
    </div> 
    );
};

export default SubjectBar;

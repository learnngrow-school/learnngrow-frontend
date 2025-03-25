import { useState, useEffect } from "react";
import BaseButton from "../../../../shared/Buttons/BaseButton";
import "./SubjectBarTeacher.css";
import { getSubjects } from "../../../../services/subject.service";
import SubjectsSlider from "../../../PersonalAccount/Schedule/components/SubjectsSlider/SubjectsSlider";
import PlusWhite from "../../../../assets/icons/plus-white.svg";
import { useNavigate } from "react-router-dom";

const SubjectBarTeacher = () => {
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState<string[]>([]);

    useEffect(() => {
        getSubjects().then((res: any) => {
            if (res.status === 200) {
                setSubjects(res.data.map((subject: any) => subject.title));
            }
        });
    }, []);

    const handleCreateHomeworkClick = () => {
        navigate("/me/courses/create");
      };

    return (
        <div className="container-schedule-buttons-courses">
            <div className="filter-roll-subject-container">
                <SubjectsSlider subjects={subjects} />
            </div>

            <div className="add-lesson-container">
                <BaseButton
                    data-bs-toggle="modal"
                    data-bs-target="#creationModal"
                    className="add-lesson-btn-schedule"
                    text="Создать курс"
                    onClick={handleCreateHomeworkClick}
                    theme="pink-primary"
                    iconPath={PlusWhite}
                />
            </div>
        </div> 
    );
};

export default SubjectBarTeacher;

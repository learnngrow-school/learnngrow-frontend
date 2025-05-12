import { useState, useEffect, useRef } from "react";
import BaseButton from "../../../../shared/Buttons/BaseButton";
import "./SubjectBarTeacher.css";
import { getSubjects } from "../../../../services/subject.service";
import SubjectsSlider from "../../../PersonalAccount/Schedule/components/SubjectsSlider/SubjectsSlider";
import PlusWhite from "../../../../assets/icons/plus-white.svg";
import { useNavigate } from "react-router-dom";
import FilterDropdown from "../FilterDropdown/filter-dropdown";
import useWindowSize from "../WindowSize/useWindowSize";

interface SubjectBarTeacherProps {
    selectedSubject: string;
    onSubjectChange: (subject: string) => void;
}

const SubjectBarTeacher = ({onSubjectChange }: SubjectBarTeacherProps) => {
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState<string[]>([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterButtonRef = useRef<HTMLButtonElement>(null);

    const { width } = useWindowSize();
    const showMobil = width <= 768;

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
                <BaseButton
                    text="Фильтр"
                    theme="white-secondary"
                    className="btn-filter"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    ref={filterButtonRef}
                />
                    <FilterDropdown
                    isOpen={isFilterOpen}
                    buttonRef={filterButtonRef}
                    onClose={() => setIsFilterOpen(false)}
                    onFilterChange={() => {}}
                />
                {!showMobil ? ( 
                    <SubjectsSlider subjects={subjects} onSubjectSelect={onSubjectChange} />
                ) : (
                    <></>
                )
                }
                
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

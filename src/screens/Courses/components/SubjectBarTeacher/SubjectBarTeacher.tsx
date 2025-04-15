import { useState, useEffect, useRef } from "react";
import BaseButton from "../../../../shared/Buttons/BaseButton";
import "./SubjectBarTeacher.css";
import { getSubjects } from "../../../../services/subject.service";
import SubjectsSlider from "../../../PersonalAccount/Schedule/components/SubjectsSlider/SubjectsSlider";
import PlusWhite from "../../../../assets/icons/plus-white.svg";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../WindowSize/useWindowSize";
import FilterDropdown from "../FilterDropdown/filter-dropdown";
import DropDownButton from "../../../../shared/Buttons/DropDownButton";
import MenuDrop from '../../../../assets/icons/menuDrop.svg'

interface SubjectBarTeacherProps {
    selectedSubject: string;
    onSubjectChange: (subject: string) => void;
}

const SubjectBarTeacher = ({onSubjectChange }: SubjectBarTeacherProps) => {
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState<string[]>([]);
    const { width } = useWindowSize();  // Получаем ширину экрана
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterButtonRef = useRef<HTMLButtonElement>(null);

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
                {width <= 767 ? (
                    <>
                        <DropDownButton 
                        items={[]} 
                        text={''} 
                        theme={'white-primary'}
                        iconPath={MenuDrop}
                        withToggleIcon={false}
                        className='btn-menu-drop'
                        />
                    </>
                ) : width <= 1024 ? (
                    <>
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
                    </>
                ) : (
                    <SubjectsSlider subjects={subjects} onSubjectSelect={onSubjectChange} />
                )}
            </div>

            <div className="add-lesson-container">
            {width <= 767 ? (
                    <BaseButton
                    data-bs-toggle="modal"
                    data-bs-target="#creationModal"
                    className="add-lesson-btn-schedule-compact"
                    text=""
                    onClick={handleCreateHomeworkClick}
                    theme="pink-primary"
                    iconPath={PlusWhite}
                    />
                ) : (
                    <BaseButton
                    data-bs-toggle="modal"
                    data-bs-target="#creationModal"
                    className="add-lesson-btn-schedule"
                    text="Создать курс"
                    onClick={handleCreateHomeworkClick}
                    theme="pink-primary"
                    iconPath={PlusWhite}
                    />
                )}
                
            </div>
        </div> 
    );
};

export default SubjectBarTeacher;

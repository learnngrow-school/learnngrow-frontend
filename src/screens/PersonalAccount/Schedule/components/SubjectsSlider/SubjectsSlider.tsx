import { useState } from "react";
import "./subjectsSlider.css";
import ArrowRight from "../../../../../assets/icons/long-arrow-right.svg";
import ArrowLeft from "../../../../../assets/icons/long-arrow-left.svg";
import BaseButton from "../../../../../shared/Buttons/BaseButton";

interface IProps {
    subjects: string[];
}

const SubjectsSlider = ({ subjects }: IProps) => {
    const BLOCK_LENGTH = 3;
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(BLOCK_LENGTH);

    // Вставляем кнопку "Все предметы" в начало массива
    const subjectsWithAll = ["Все предметы", ...subjects];

    const visibleSubjects = subjectsWithAll.slice(start, end);

    const onRightClick = () => {
        if (end < subjectsWithAll.length) {
            if (end === subjectsWithAll.length - 1) {
                setStart(subjectsWithAll.length - BLOCK_LENGTH);
                setEnd(subjectsWithAll.length);
            } else {
                setStart(start + 1);
                setEnd(end + 1);
            }
        }
    };

    const onLeftClick = () => {
        if (start > 0) {
            setStart(start - 1);
            setEnd(end - 1);
        }
    };

    return (
        <div className="subjects-slider">
            <button
                className="slider-button-schedule"
                onClick={onLeftClick}
                disabled={start === 0}
            >
                <img src={ArrowLeft} alt="Left" />
            </button>

            <div className="subjects-container-schedule">
                {visibleSubjects.map((subject, index) => (
                    <BaseButton
                        key={index}
                        className="add-lesson-btn-schedule-slider"
                        text={subject}
                        theme="white-secondary"
                    />
                ))}
            </div>

            <button
                className="slider-button-schedule"
                onClick={onRightClick}
                disabled={end >= subjectsWithAll.length}
            >
                <img src={ArrowRight} alt="Right" />
            </button>
        </div>
    );
};

export default SubjectsSlider;

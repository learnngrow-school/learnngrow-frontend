import { useState } from "react";
import "./main.css";
import arrowUp from "../../../../../assets/icons/arrow-up.svg";
import arrowDown from "../../../../../assets/icons/arrow-down.svg";

interface Lesson {
    subject: string;
    teacherNotes?: string;
    timestamp: number;
    duration: number;
    homework: string;
}

interface Props {
    dayLabel: string;
    lessons: Lesson[];
}

const ScheduleAccordionDay = ({ dayLabel, lessons }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="accordion-day">
            <div className="accordion-header" onClick={() => setOpen(!open)}>
                <span>{dayLabel}</span>
                <span>{open ? <img src={arrowUp}></img> : <img src={arrowDown}></img>}</span>
            </div>
            {open && (
                <div className="accordion-body">
                    {lessons.length > 0 ? (
                        lessons.map((lesson, idx) => {
                            const start = new Date(lesson.timestamp);
                            const end = new Date(lesson.timestamp + lesson.duration * 60000);

                            const formatTime = (date: Date) =>
                                `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

                            return (
                                <div key={idx} className="lesson-card-mobile">
                                    <p>{`${formatTime(start)} - ${formatTime(end)}`}</p>
                                    <p>{lesson.homework}</p>
                                </div>
                            );
                        })
                    ) : (
                        <p className="no-lessons">Нет занятий</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ScheduleAccordionDay;

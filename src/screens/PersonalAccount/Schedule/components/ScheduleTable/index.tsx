import { useEffect, useState } from "react";
import "./main.css";
import { getLessons } from "../../../../../services/lesson.service";

interface ScheduleTableProps {
    weekOffset: number;
}

const ScheduleTable = ({ weekOffset }: ScheduleTableProps) => {
    const [lessons, setLessons] = useState<any[]>([]);
    const [weekDays, setWeekDays] = useState<string[]>([]);

    useEffect(() => {
        const fetchLessons = async () => {
            const data = await getLessons(weekOffset);
            if (Array.isArray(data)) {
                setLessons(data);
                generateWeekDays(data);
            }
        };
        fetchLessons();
    }, [weekOffset]);

    const generateWeekDays = (lessons: any[]) => {
        if (lessons.length === 0) return;

        const firstLessonDate = new Date(lessons[0].timestamp);
        const monday = new Date(firstLessonDate);
        monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));

        const days = Array.from({ length: 7 }, (_, i) => {
            const date = new Date(monday);
            date.setDate(monday.getDate() + i);
            return `${["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"][i]} \n ${date.getDate()}.${(date.getMonth() + 1).toString().padStart(2, "0")}`;
        });

        setWeekDays(days);
    };

    const timeSlots = Array.from({ length: 14 }, (_, i) => `${i + 8}:00`);

    return (
        <div className="container-schadule-table">
            <table className="schadule-table">
                <thead>
                    <tr>
                        <th></th>
                        {weekDays.map((day, i) => (
                            <th key={i} className="th-schedule">{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map((time, i) => (
                        <tr key={i}>
                            <td>{time}</td>
                            {[...Array(7)].map((_, j) => (
                                <td key={j}>
                                    <div className="lesson-box-sch">
                                        {lessons.map((lesson, index) => {
                                            const dateObj = new Date(lesson.timestamp);
                                            const endDateObj = new Date(dateObj.getTime() + lesson.duration * 60000);
                                            const startHour = dateObj.getHours();
                                            const startMinutes = dateObj.getMinutes();
                                            const startSlot = (startHour - 8) * 60 + startMinutes;
                                            const dayIndex = (dateObj.getDay() + 6) % 7;

                                            if (j === dayIndex && startSlot >= i * 60 && startSlot < (i + 1) * 60) {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="lesson-block"
                                                        style={{
                                                            height: `${(lesson.duration / 60) * 74}px`,
                                                            top: `${(startSlot - i * 60) * 74 / 60}px`,
                                                        }}
                                                    >
                                                        <p className="lesson-time-sch">
                                                            {`${dateObj.getHours()}:${dateObj.getMinutes().toString().padStart(2, "0")} - ${endDateObj.getHours()}:${endDateObj.getMinutes().toString().padStart(2, "0")}`}
                                                        </p>
                                                        <p className="lesson-title-sch">{lesson.homework}</p>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleTable;

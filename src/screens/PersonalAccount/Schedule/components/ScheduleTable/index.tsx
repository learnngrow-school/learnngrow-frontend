import { useEffect, useState } from "react";
import "./main.css"
import { getLessons } from "../../../../../services/lesson.service";

const ScheduleTable = () => {
    const [lessons, setLessons] = useState<any[]>([]);

    useEffect(() => {
        const fetchLessons = async () => {
            const data = await getLessons();
            if (Array.isArray(data)) {
                setLessons(data);
            }
        };
        fetchLessons();
    }, []);

    const timeSlots = Array.from({ length: 14 }, (_, i) => `${i + 8}:00`); // От 8 до 21
    const weekDays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

    return (
        <div className="container-schadule-table">
            <table className="schadule-table">
                <thead>
                    <tr>
                        <th></th>
                        {weekDays.map((day, i) => (
                            <th key={i}>{day}</th>
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
                                            const dateObj =
                                                typeof lesson.timestamp === "number" || typeof lesson.timestamp === "string"
                                                    ? new Date(lesson.timestamp)
                                                    : lesson.timestamp;

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















{/* <div className="lessons-overlay">
                {lessons.map((lesson, index) => {
                    const dateObj = typeof lesson.timestamp === "number" || typeof lesson.timestamp === "string" 
                    ? new Date(lesson.timestamp) 
                    : lesson.timestamp;
                    const DateObj = new Date(dateObj.getTime() + 60000);

                    const startTime = dateObj.toLocaleTimeString("ru-RU", {
                        hour: "2-digit",
                        minute: "2-digit",
                    });

                    const endDateObj = new Date(dateObj.getTime() + lesson.duration * 60000);

                    const endTime = endDateObj.toLocaleTimeString("ru-RU", {
                        hour: "2-digit",
                        minute: "2-digit",
                    });

                    const startHours = dateObj.getHours();
                    const startMinutes = dateObj.getMinutes();
                    
                    const dayIndex = dateObj.getDay()

                    const totalMinutesStart = startHours * 60 + startMinutes; // Переводим всё в минуты
                    const top = (totalMinutesStart - 9 * 60) * 74.1 / 60; // 80px на каждый час, и делим на 60 для минут
                    const height = (lesson.duration / 60) * 80 - 7; // Высота пропорциональна длительности
                    const left = dayIndex * 120 - 62; // ширина одного столбца
                    console.log(DateObj, "day - ", dayIndex, left, height, "top - ", top)

                    return (
                        <div
                            key={index}
                            className="lesson-block"
                            style={{
                                top: `${top}px`,
                                height: `${height}px`,
                                left: `${left}px`,
                            }}
                        >
                            <p className="lesson-time-sch">{startTime} - {endTime}</p>
                            <p className="lesson-title-sch">{lesson.homework}</p>
                        </div>
                    );
                })}
            </div> */}

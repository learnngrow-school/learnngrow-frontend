import { useEffect, useState } from "react";
import "./main.css";
import { getLessons } from "../../../../../services/lesson.service";
import ScheduleAccordionDay from "../ScheduleAccordionDay";

interface ScheduleTableProps {
    weekOffset: number;
}

const ScheduleTableMobile = ({ weekOffset }: ScheduleTableProps) => {
    const [lessons, setLessons] = useState<any[]>([]);
    const [weekDates, setWeekDates] = useState<Date[]>([]);

    useEffect(() => {
        const fetchLessons = async () => {
            const data = await getLessons(weekOffset);
            if (Array.isArray(data)) {
                setLessons(data);
                generateWeekDays();
            }
        };
        fetchLessons();
    }, [weekOffset]);

    const generateWeekDays = () => {
        const today = new Date();
        const monday = new Date(today);
        monday.setDate(monday.getDate() - ((today.getDay() + 6) % 7));
        monday.setDate(monday.getDate() + weekOffset * 7);

        const dates = Array.from({ length: 7 }, (_, i) => {
            const date = new Date(monday);
            date.setDate(monday.getDate() + i);
            return date;
        });

        setWeekDates(dates);
    };

    return (
        <div className="list-days-lessons">
            {weekDates.map((date, i) => {
                const label = `${["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"][i]} ${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}`;

                const dayStart = new Date(date);
                dayStart.setHours(0, 0, 0, 0);
                const dayEnd = new Date(date);
                dayEnd.setHours(23, 59, 59, 999);

                const dayLessons = lessons.filter((l) => {
                    const ts = Number(l.timestamp);
                    return ts >= dayStart.getTime() && ts <= dayEnd.getTime();
                });

                return <ScheduleAccordionDay key={i} dayLabel={label} lessons={dayLessons} />;
            })}
        </div>
    );
};

export default ScheduleTableMobile;

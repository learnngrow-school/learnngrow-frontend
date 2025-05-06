import React from "react";
import "./lesson-card.css";
import useWindowSize from "../../../Courses/components/WindowSize/useWindowSize";

interface LessonCardProps {
  homework: string;
  teacherNotes?: string;
  timestamp: number | string | Date;
  duration: number;
  className?: string;
  icon?: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ homework, teacherNotes, timestamp, duration, className, icon }) => {
  const { width } = useWindowSize();
  
  const dateObj = typeof timestamp === "number" || typeof timestamp === "string" 
    ? new Date(timestamp) 
    : timestamp;

  const endDateObj = new Date(dateObj.getTime() + duration * 60000);

  const date = dateObj.toLocaleDateString("ru-RU", {
    month: "numeric",
    day: "numeric",
  });

  const startTime = dateObj.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const endTime = endDateObj.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const showMobil = width <= 768;

return (
    <>
      {!showMobil ? (

        <div className={`lesson-card ${className}`}>
          <p className="lesson-title">{homework}</p>
          <p className="homework-date">Дата: {date}</p>
          <p className="homework-time">Время: {startTime} - {endTime}</p> {/* Добавлен интервал */}
          {teacherNotes && <p className="homework-notes">{teacherNotes}</p>}
        </div>

      ) : (

        <div className={`lesson-card ${className}`}>
          <div className="info-lesson-card-column">
            <p className="lesson-title">{homework}</p>
            <p className="homework-date">Дата: {date}</p>
            <p className="homework-time">Время: {startTime} - {endTime}</p> {/* Добавлен интервал */}
            {teacherNotes && <p className="homework-notes">{teacherNotes}</p>}
          </div>
          <div className="icon-lesson-card-column">
            {icon && <img src={icon} className="icon"></img>}
          </div>
        </div>

      )
      }
    </>
  );
};

export default LessonCard;

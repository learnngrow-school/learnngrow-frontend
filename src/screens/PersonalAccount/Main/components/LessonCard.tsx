import React from "react";
import "./lesson-card.css";

interface LessonCardProps {
  homework: string;
  teacherNotes?: string;
  timestamp: number | string | Date;
  className?: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ homework, teacherNotes, timestamp, className }) => {
  const dateObj = typeof timestamp === "number" || typeof timestamp === "string" 
    ? new Date(timestamp) 
    : timestamp;

  const date = dateObj.toLocaleDateString("ru-RU", {
    month: "numeric",
    day: "numeric",
  });

  const time = dateObj.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`lesson-card ${className}`}>
      <p className="lesson-title">{homework}</p>
      <p className="homework-date">Дата: {date}</p>
      <p className="homework-time">Время: {time}</p>
      {teacherNotes && <p className="homework-notes">{teacherNotes}</p>}
    </div>
  );
};

export default LessonCard;

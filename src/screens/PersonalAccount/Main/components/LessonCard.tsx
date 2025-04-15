import React from "react";
import "./lesson-card.css";

interface LessonCardProps {
  homework: string;
  teacherNotes?: string;
  timestamp: number | string | Date;
  duration: number;
  className?: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ homework, teacherNotes, timestamp, duration, className }) => {
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

  return (
    <div className={`lesson-card ${className}`}>
      <p className="lesson-title">{homework}</p>
      <p className="homework-date">Дата: {date}</p>
      <p className="homework-time">Время: {startTime} - {endTime}</p> {/* Добавлен интервал */}
      {teacherNotes && <p className="homework-notes">{teacherNotes}</p>}
    </div>
  );
};

export default LessonCard;

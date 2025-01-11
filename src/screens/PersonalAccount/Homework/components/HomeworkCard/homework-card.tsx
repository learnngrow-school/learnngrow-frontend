import React from "react";
import "./homework-card.css";
import Ready from "../../../../../assets/icons/galochka-ready.svg";

interface HomeworkCardProps {
  homework: string;
  deadline: number | string | Date;
  link: string;
  completed: boolean;
}

const HomeworkCard: React.FC<HomeworkCardProps> = ({ homework, deadline, link, completed }) => {
  const dateObj = typeof deadline === "number" || typeof deadline === "string"
    ? new Date(deadline)
    : deadline;

  const date = dateObj.toLocaleDateString("ru-RU", {
    month: "numeric",
    day: "numeric",
  });

  return (
    <div className={`homework-card ${completed ? "completed" : ""}`}>
      <p className="homework-title-card">
        {homework}
        {completed && <img src={Ready} alt="Completed" className="ready-img" />}
      </p>
      <p className="homework-date">Дедлайн: {date}</p>
      <p className="homework-link">
        Домашняя работа: <a href={link} target="_blank" rel="noopener noreferrer" className="link-hm">{link}</a>
      </p>
    </div>
  );
};

export default HomeworkCard;

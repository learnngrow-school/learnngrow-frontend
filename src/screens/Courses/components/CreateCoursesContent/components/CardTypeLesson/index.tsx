import { FC } from "react";
import "./main.css";

interface CardTypeLessonProps {
    title: string;
    iconPath: string;
    onClick?: () => void;  // Добавляем onClick
}

const CardTypeLesson: FC<CardTypeLessonProps> = ({ title, iconPath, onClick }) => {
    return (
        <div className="container-card-type-lesson" onClick={onClick}>
            <img className="icon" src={iconPath} alt={title} />
            <div className="title">{title}</div>
        </div>
    );
};

export default CardTypeLesson;

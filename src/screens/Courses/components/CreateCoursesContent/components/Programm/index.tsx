import { FC } from "react";
import "./main.css";

interface ProgramProps {
    lessonName: string;
    lessonContentName: string | any;
}

const Programm: FC<ProgramProps> = ({ lessonName, lessonContentName }) => {

    return (
        <div className="training-program">
            <div className="header">Учебная программа</div>
            <div className="lesson-name">{lessonName}</div>
            <div className="lesson-content-name">1. {lessonContentName}</div>
        </div>
    );
};

export default Programm;

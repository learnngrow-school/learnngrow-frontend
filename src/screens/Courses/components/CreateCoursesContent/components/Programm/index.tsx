import { FC } from "react";
import "./main.css";

interface ProgramProps {
    lessonName: string;
    lessonContentName: string | any;
}

const Programm: FC<ProgramProps> = ({ lessonName, lessonContentName }) => {

    return (
        <div className="training-program">
            <div>{lessonName}</div>
            <div>{lessonContentName}</div>
        </div>
    );
};

export default Programm;

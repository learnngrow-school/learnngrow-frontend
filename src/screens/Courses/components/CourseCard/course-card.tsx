import { FC } from "react";
import "./course-card.css";

interface CourseCardProps {
    title: string;
    subject: string;
    price: string;
    progress?: number;
}

const CourseCard: FC<CourseCardProps> = ({ title, subject, price, progress }) => {
    return (
            <div className="course-card">
                <div className="course-image"> {/*изображение*/ }
                    {progress !== undefined && (
                        <div className="course-progress-bar">
                            <div className="course-progress" style={{ width: `${progress}%` }}>
                                <span className="course-progress-text">{progress}%</span>
                            </div>
                        </div>
                    )}
                </div>
                <p className="course-subject">{subject}</p>
                <p className="course-title">{title}</p>
                <p className="course-price">
                    {price === "0" ? "Бесплатно" : `${price} р/мес`}
                </p>
            </div>
    );
};

export default CourseCard;

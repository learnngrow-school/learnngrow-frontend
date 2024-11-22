import { FC } from "react";
import { Link } from "react-router-dom";
import "./course-card.css";

interface CourseCardProps {
    title: string;
    description: string;
    price: string;
    progress?: number;
}

const CourseCard: FC<CourseCardProps> = ({ title, description, price, progress }) => {
    return (
        <Link to={"#"} className="course-card-link">
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
                <p className="course-title">{title}</p>
                <p className="course-description">{description}</p>
                <p className="course-price">
                    {price === "0" ? "Бесплатно" : `${price} р/мес`}
                </p>
            </div>
        </Link>
    );
};

export default CourseCard;

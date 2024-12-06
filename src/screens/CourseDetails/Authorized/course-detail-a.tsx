import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCourseDetails } from "../../../services/course-details.service";
import "./course-detail-a.css"
import BaseButton from "../../../shared/Buttons/BaseButton";
import BackArrow from "../../../assets/icons/back-arrow.svg"

const CourseDetailAuthorized: FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    if (!id) {
        return <div className="course-details__error">Курс не найден</div>;
    }

    const { courseData } = useCourseDetails(id);

    if (!courseData) {
        return <div className="course-details__error">Курс не найден</div>;
    }

    const isCoursePurchased = true; 
    const progress = 75;

    const handleBackClick = () => {
        navigate(-1);
    };


    return (
        <>
            <div className="back-to-courses" onClick={handleBackClick}>
                <img className="back-arrow" src={BackArrow} alt="Back" />
                Все курсы
            </div>
            <div className="container-info-detail">
                <div className="info-course">
                    <p className="title-info-detail">{courseData.course.title}</p>
                    <p className="subject-info-detail">{courseData.subject.title}. {courseData.course.grade} класс</p>
                    <div className="details">
                        <div>Детали:</div>
                        <div className="details-info">
                            Задания: 5 <br/>
                            Тесты: 5 <br/>
                            Теория: 5 <br/>
                            Уровень: Школьный
                        </div>
                    </div>
                    <div className="info-bottom">
                        <BaseButton
                            text={isCoursePurchased ? "Продолжить курс" : (courseData.course.price === 0 ? "Получить курс" : "Купить курс")}
                            theme="pink-primary"
                            className="btn-buy"
                        />
                        {isCoursePurchased ? "":<p className="price">{courseData.course.price === 0 ? "Бесплатно" : `${courseData.course.price} р.`}</p>}
                    </div>
                </div>
                <div className={`course-image-info-detail ${isCoursePurchased ? 'purchased' : 'not-purchased'}`}>
                    {/* Изображение курса */}
                    {isCoursePurchased && progress !== undefined && (
                        <div className="course-progress-bar-detail">
                            <div className="course-progress-detail" style={{ width: `${progress}%` }}>
                                <span className="course-progress-text-detail">Прогресс: {progress}%</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );

};

export default CourseDetailAuthorized;

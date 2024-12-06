import { FC } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useCourseDetails } from "../../../services/course-details.service";
import "./course-detail-na.css";
import BaseButton from "../../../shared/Buttons/BaseButton";
import { urls } from "../../../navigation/app.urls";

const CourseDetailNotAuthorized: FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    if (!id) {
        return <div className="course-details__error">Курс не найден</div>;
    }

    const { courseData } = useCourseDetails(id);

    if (!courseData) {
        return <div className="course-details__error">Курс не найден</div>;
    }

    const handleButtonClick = () => {
        navigate(urls.auth);
    }

    return (
        <>
            <div className="navBack">
                <div className="miniNav">
                    <NavLink to={urls.main} className="text--body-s link text-400">
                        Главная
                    </NavLink>
                    <div>{">"}</div>
                    <NavLink to={urls.courses} className="text--body-s link text-400">
                        Курсы
                    </NavLink>
                    <div>{">"}</div>
                    <div className="text--body-s">{courseData.subject.title}. {courseData.course.grade} класс</div>
                </div>
            </div>
            <div className="container-info-detail-na">
                <div className="info-course">
                    <p className="title-info-detail">{courseData.course.title}</p>
                    <p className="subject-info-detail">
                        {courseData.subject.title}. {courseData.course.grade} класс
                    </p>
                    <div className="details">
                        <div>Детали:</div>
                        <div className="details-info">
                            Задания: 5 <br />
                            Тесты: 5 <br />
                            Теория: 5 <br />
                            Уровень: Школьный
                        </div>
                    </div>
                    <div className="info-bottom">
                        <BaseButton
                            text={
                                courseData.course.price === 0 ? "Получить курс" : "Купить курс"
                            }
                            theme="pink-primary"
                            className="btn-buy"
                            onClick={handleButtonClick}
                        />
                        <p className="price">
                            {courseData.course.price === 0
                                ? "Бесплатно"
                                : `${courseData.course.price} р.`}
                        </p>
                    </div>
                </div>
                <div className="course-image-info-detail">
                    {/* Изображение курса */}
                </div>
            </div>
            <div className="similar-detail">
                <p className="text-similar-detail">Похожие курсы</p>
            </div>
        </>
    );
};

export default CourseDetailNotAuthorized;
